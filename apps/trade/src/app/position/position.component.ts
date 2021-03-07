import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IStock } from '../home/trade.interface';

@Component({
  selector: 'money-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PositionComponent {
  @Input() stock: IStock;
}
