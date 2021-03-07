import { Injectable } from '@angular/core';
import { exception } from 'console';
import { IStock } from './home/trade.interface';

@Injectable({ providedIn: 'root' })
export class StocksService {
  howManySharesToAverage(stock: IStock, expectedRate: number) {
    if (!stock || !expectedRate) throw new exception('Values cannot be null');

    if (expectedRate >= stock.lastPrice)
      throw new exception(
        'The current price of the stock cannot be greater than the expected rate'
      );

    return (
      (stock.count * (stock.cost - expectedRate)) /
      (expectedRate - stock.lastPrice)
    );
  }
}
