import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subject, timer } from 'rxjs';
import {
  catchError,
  map,
  retry,
  share,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs/operators';
import { trade } from '../stocks.json';
import { IResponse, IStock, ITrade } from './trade.interface';

@Component({
  selector: 'money-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  trade$: Observable<ITrade>;
  private stopPolling = new Subject();
  loading = false;
  displayedColumns: string[] = [
    'ticker',
    'cost',
    'lastPrice',
    'profit',
    'Buy/Sell',
    'min',
    'max',
  ];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.trade$ = timer(1, 5000).pipe(
      switchMap(() => this.getStocks(this.getTickers(trade))),
      retry(),
      share(),
      takeUntil(this.stopPolling)
    );
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

  getStocks(tickers: string[]) {
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
            stocks: tr.stocks.map((st: IStock) => ({
              ...st,
              ...Array.from(Object.values(s)).find(
                (s: IResponse) => s.symbol === st.ticker
              ),
            })),
          }));
        }),
        map((trade) =>
          trade.map((tr) => ({
            ...tr,
            stocks: tr.stocks
              .map((s) => ({
                ...s,
                perShareProfit: (s.lastPrice - s.cost).toFixed(
                  s.lastPrice < 0.01 ? 5 : 2
                ),
                isProfit: s.lastPrice - s.cost > 0,
                profit: ((s.lastPrice - s.cost) * s.count).toFixed(2),
              }))
              .sort((s1, s2) => +s2.profit - +s1.profit),
          }))
        ),
        tap(() => (this.loading = false)),
        catchError(() => {
          this.loading = false;
          alert('ERROR');
          return of(null);
        })
      );
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
