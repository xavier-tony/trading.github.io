import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { ActionComponent } from '../action/action.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { IStock, ITrade } from '../home/trade.interface';
import { Observable } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';
@Component({
  selector: 'money-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateStockComponent {
  trade$: Observable<ITrade[]>;
  stockToUpdate: IStock;
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<ActionComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA)
    public data: {
      trade$: Observable<ITrade[]>;
      stock: IStock;
      tradeId: string;
      action: 'ADD' | 'UPDATE' | 'MOVE';
    },
    private store: AngularFirestore
  ) {
    this.trade$ = this.data.trade$;
    this.stockToUpdate = this.data.stock;
  }

  add(
    ticker: string,
    count: number,
    cost: number,
    adjustRate: number,
    strikeRate: number,
    sellRate: number
  ) {
    this.trade$
      .pipe(
        map((t) => t.find((t1) => t1.id === this.data.tradeId)),
        tap((trade: ITrade) => {
          if (trade.stocks.some((s) => s.ticker === ticker))
            throw new Error('Stock already exists!!');

          this.store
            .collection('trade')
            .doc(trade.id)
            .set({
              ...trade,
              stocks: [
                ...trade.stocks,
                {
                  cost,
                  ticker,
                  count,
                  strikeRate,
                  adjustRate,
                  sellRate,
                },
              ],
            });
        }),
        first()
      )
      .subscribe(() => this._bottomSheetRef.dismiss());
  }

  update(
    ticker: string,
    count: number,
    cost: number,
    adjustRate: number,
    strikeRate: number,
    sellRate: number
  ) {
    this.trade$
      .pipe(
        map((t) => t.find((t1) => t1.id === this.data.tradeId)),
        tap((trade: ITrade) => {
          this.store
            .collection('trade')
            .doc(trade.id)
            .set({
              ...trade,
              stocks: [
                ...trade.stocks.filter((s) => s.ticker !== ticker),
                {
                  ...this.stockToUpdate,
                  cost,
                  ticker,
                  count,
                  strikeRate,
                  adjustRate,
                  sellRate,
                },
              ],
            });
        }),
        first()
      )
      .subscribe(() => this._bottomSheetRef.dismiss());
  }

  move(
    ticker: string,
    count: number,
    cost: number,
    adjustRate: number,
    strikeRate: number,
    sellRate: number
  ) {}

  updateStock(
    ticker: string,
    count: number,
    cost: number,
    adjustRate: number,
    strikeRate: number,
    sellRate: number
  ) {
    if (this.data.action === 'ADD')
      this.add(ticker, count, cost, adjustRate, strikeRate, sellRate);
    else if (this.data.action === 'UPDATE')
      this.update(ticker, count, cost, adjustRate, strikeRate, sellRate);
    else this.move(ticker, count, cost, adjustRate, strikeRate, sellRate);
  }
}
