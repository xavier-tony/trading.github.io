import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { IStock } from '../home/trade.interface';

@Component({
  selector: 'money-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WatchlistComponent {
  @Input() stock: IStock;
}
