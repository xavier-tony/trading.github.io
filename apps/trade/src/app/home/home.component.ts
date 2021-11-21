import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {
  MatBottomSheet,
  MatBottomSheetConfig,
} from '@angular/material/bottom-sheet';
import { Observable, of, Subject, timer } from 'rxjs';
import {
  catchError,
  filter,
  first,
  map,
  retry,
  share,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs/operators';
import { ActionComponent } from '../action/action.component';
import { StocksService } from '../stocks.service';
import { UpdateStockComponent } from '../update-stock/update-stock.component';
import { IResponse, IStock, ITrade } from './trade.interface';
import { trade } from '../stocks.json';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'money-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  openSidenav = true;
  trade$: Observable<ITrade>;
  private stopPolling = new Subject();
  loading = false;
  stocks$: Observable<ITrade[]>;
  displayedColumns: string[] = [
    'ticker',
    'lastPrice',
    'cost',
    'totalcost',
    'profit',
    // 'Buy/Sell',
    // 'min',
    // 'max',
    'adjustShares',
    'action',
  ];
  actionStocks: IStock[] = [];
  constructor(
    private http: HttpClient,
    private stocksService: StocksService,
    private bottomSheet: MatBottomSheet,
    private store: AngularFirestore
  ) {}

  ngOnInit() {
    // this.stocks$ = this.db.list<ITrade>('trade').valueChanges();
    // this.stocks$ = of(trade);
    this.stocks$ = this.store
      .collection('trade')
      .valueChanges({ idField: 'id' })
      .pipe(tap(console.log)) as Observable<ITrade[]>;

    this.trade$ = this.stocks$.pipe(
      switchMap((trade) =>
        timer(1, 5000).pipe(switchMap(() => this.getStocks(trade)))
      ),
      retry(),
      share(),
      takeUntil(this.stopPolling)
    );

    // this.trade$ = timer(1, 20000).pipe(
    //   switchMap(() => this.stocks$),
    //   switchMap((trade) => this.getStocks(trade)),
    //   retry(),
    //   share(),
    //   takeUntil(this.stopPolling)
    // );

    this.stocksService.openSidenav$
      .asObservable()
      .pipe(tap((x) => (this.openSidenav = x)))
      .subscribe();

    this.stocksService.addNewTrade$
      .asObservable()
      .pipe(tap(() => this.addNewTrade()))
      .subscribe();
  }

  close() {
    this.openSidenav = false;
  }

  trackByTrade = (index, trade) => index;
  trackByStock = (index, stock: IStock) => index;

  getTickers(trade: ITrade[]) {
    return [].concat(
      ...trade
        .filter((t) => !!t.stocks)
        .map((t) => [...new Set(t.stocks.map((s) => s.ticker))])
    );
  }

  addNewTrade() {
    // const bottomSheetConfig: MatBottomSheetConfig = {
    //   autoFocus: true,
    //   data: {
    //     tradeRef: this.db.list('trade'),
    //   },
    // };
    // this.bottomSheet.open(ActionComponent, bottomSheetConfig);
    // const trade: ITrade = {
    //   code: 'Pennies',
    //   name: 'PENNY',
    //   owner: 'TONY',
    //   stocks: [],
    // };
    // const tradeRef = this.db.list('trade');
    // tradeRef.push(trade);
  }

  onAddStock(tradeId: string) {
    const bottomSheetConfig: MatBottomSheetConfig = {
      autoFocus: true,
      data: {
        trade$: this.stocks$,
        action: 'ADD',
        tradeId,
      },
    };
    this.bottomSheet.open(UpdateStockComponent, bottomSheetConfig);
  }

  onEditStock({ stock, tradeId }) {
    const bottomSheetConfig: MatBottomSheetConfig = {
      autoFocus: true,
      data: {
        trade$: this.stocks$,
        stock: stock,
        action: 'UPDATE',
        tradeId,
      },
    };
    this.bottomSheet.open(UpdateStockComponent, bottomSheetConfig);
  }

  onMoveToWatchList({ stock, tradeId, to }) {
    const bottomSheetConfig: MatBottomSheetConfig = {
      autoFocus: true,
      data: {
        trade$: this.stocks$,
        stock: stock,
        action: 'MOVE',
        tradeId,
        to,
      },
    };
    this.bottomSheet.open(UpdateStockComponent, bottomSheetConfig);
  }

  onDeleteStock({ stock, tradeId }) {
    this.stocks$
      .pipe(
        map((t) => t.find((t1) => t1.id === tradeId)),
        tap((trade: ITrade) => {
          this.store
            .collection('trade')
            .doc(trade.id)
            .set({
              ...trade,
              stocks: [
                ...trade.stocks.filter((st) => st.ticker !== stock.ticker),
              ],
            });
        }),
        first()
      )
      .subscribe();
  }

  getStocks(trade: ITrade[]) {
    const tickers = this.getTickers(trade);

    this.loading = true;
    const httpHeaders = new HttpHeaders().set(
      'Content-Type',
      'application/json'
    );
    const params = new HttpParams()
      .set('symbol', tickers.join(','))
      .set('apikey', 'OSO9U25QK6O9X5JFOGEJUYTBUDPLQFFT');
    return this.http
      .get(`https://api.tdameritrade.com/v1/marketdata/quotes`, {
        headers: httpHeaders,
        responseType: 'json',
        params: params,
      })
      .pipe(
        map(this.mapResponse),
        map((s: IResponse[]) => {
          return trade.map((tr: ITrade) => ({
            ...tr,
            stocks: tr.stocks
              ? tr.stocks.map((st: IStock) => ({
                  ...st,
                  tradeName: tr.name,
                  ...Array.from(Object.values(s)).find(
                    (s: IResponse) => s.symbol === st.ticker
                  ),
                }))
              : [],
          }));
        }),
        map((trade) =>
          trade.map((tr) => ({
            ...tr,
            stocks: tr.stocks
              .map((s) => {
                if (
                  s.strikeRate &&
                  s.strikeRate > 0 &&
                  s.lastPrice <= s.strikeRate
                )
                  this.addStrikeStocks(s);
                if (s.sellRate && s.sellRate > 0 && s.lastPrice >= s.sellRate)
                  this.addSellStocks(s);
                this.addDeadline(s);
                this.addIpo(s);
                return {
                  ...s,
                  perShareProfit: (s.lastPrice - s.cost).toFixed(
                    s.lastPrice < 0.01 ? 5 : 2
                  ),
                  isProfit: s.lastPrice - s.cost > 0,
                  profit: ((s.lastPrice - s.cost) * s.count).toFixed(2),
                  adjustShares: s.adjustRate
                    ? this.stocksService
                        .howManySharesToAverage(s, s.adjustRate)
                        .toFixed(2)
                    : null,
                  totalCost: (s.cost * s.count).toFixed(2),
                  danger: !!s.danger,
                };
              })
              .sort((s1, s2) => +s2.profit - +s1.profit),
          }))
        ),
        tap(() => (this.loading = false)),
        catchError((e) => {
          this.loading = false;
          console.error(e);
          return of(null);
        })
      );
  }

  addIpo(stock: IStock) {
    if (stock.ipo && stock.ipo.date) {
      const dateDifference = this.difference(
        new Date(),
        new Date(stock.ipo.date)
      );
      if (dateDifference >= 0) {
        const stockExist = this.actionStocks.find(
          (ss) => ss.ticker === stock.ticker && ss.tradeName === stock.tradeName
        );
        if (stockExist) {
          this.actionStocks = [
            ...this.actionStocks.filter(
              (ss) =>
                ss.ticker !== stock.ticker && ss.tradeName !== stock.tradeName
            ),
            { ...stock, ipo: { ...stock.ipo, remainingDays: dateDifference } },
          ];
        } else {
          this.actionStocks.push({
            ...stock,
            ipo: { ...stock.ipo, remainingDays: dateDifference },
          });
        }
      }
    }
  }

  addDeadline(stock: IStock) {
    if (stock.expires && stock.expires.date) {
      const dateDifference = this.difference(
        new Date(),
        new Date(stock.expires.date)
      );
      if (dateDifference >= 0) {
        const stockExist = this.actionStocks.find(
          (ss) => ss.ticker === stock.ticker && ss.tradeName === stock.tradeName
        );
        if (stockExist) {
          this.actionStocks = [
            ...this.actionStocks.filter(
              (ss) =>
                ss.ticker !== stock.ticker && ss.tradeName !== stock.tradeName
            ),
            {
              ...stock,
              expires: { ...stock.expires, remainingDays: dateDifference },
            },
          ];
        } else {
          this.actionStocks.push({
            ...stock,
            expires: { ...stock.expires, remainingDays: dateDifference },
          });
        }
      }
    }
  }

  difference(date1, date2) {
    return +((date2.getTime() - date1.getTime()) / (1000 * 3600 * 24)).toFixed(
      1
    );
  }

  addStrikeStocks(strikeStock: IStock) {
    const stockExist = this.actionStocks.find(
      (ss) =>
        ss.ticker === strikeStock.ticker &&
        ss.tradeName === strikeStock.tradeName
    );
    if (stockExist) {
      this.actionStocks = [
        ...this.actionStocks.filter(
          (ss) =>
            ss.ticker !== strikeStock.ticker &&
            ss.tradeName !== strikeStock.tradeName
        ),
        { ...strikeStock, strike: true },
      ];
    } else {
      this.actionStocks.push({ ...strikeStock, strike: true });
    }
  }

  addSellStocks(sellStock: IStock) {
    const stockExist = this.actionStocks.find(
      (ss) =>
        ss.ticker === sellStock.ticker && ss.tradeName === sellStock.tradeName
    );
    if (stockExist) {
      this.actionStocks = [
        ...this.actionStocks.filter(
          (ss) =>
            ss.ticker !== sellStock.ticker &&
            ss.tradeName !== sellStock.tradeName
        ),
        { ...sellStock, sell: true },
      ];
    } else {
      this.actionStocks.push({ ...sellStock, sell: true });
    }
  }

  mapResponse(response: any[]): IResponse[] {
    return Array.from(Object.values(response)).map((r) => ({
      lastPrice: r.lastPrice,
      mark: r.mark,
      lowPrice: r.lowPrice,
      highPrice: r.highPrice,
      high52Week: r['52WkHigh'],
      low52Week: r['52WkLow'],
      totalVolume: r.totalVolume,
      netChange: r.netChange,
      symbol: r.symbol,
    }));
  }

  ngOnDestroy() {
    this.stopPolling.next();
  }
}
