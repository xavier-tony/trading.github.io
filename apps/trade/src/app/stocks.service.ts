import { Injectable } from '@angular/core';
import { IStock } from './home/trade.interface';

@Injectable({ providedIn: 'root' })
export class StocksService {
  howManySharesToAverage(stock: IStock, expectedRate: number) {
    if (!stock || !expectedRate) return 0;
    //throw new Error('Values cannot be null');

    if (expectedRate <= stock.lastPrice) return 0;
    // throw new Error(
    //   'The current price of the stock cannot be greater than the expected rate'
    // );

    return (
      (stock.count * (stock.cost - expectedRate)) /
      (expectedRate - stock.lastPrice)
    );
  }
}
