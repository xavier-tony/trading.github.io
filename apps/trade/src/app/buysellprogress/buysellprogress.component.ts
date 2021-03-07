import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'money-buysellprogress',
  templateUrl: './buysellprogress.component.html',
  styleUrls: ['./buysellprogress.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuySellProgressComponent implements OnChanges {
  @Input() min: number;
  @Input() max: number;
  @Input() value: number;
  percent: number;
  color = 'primary';

  ngOnChanges() {
    const max = this.max - this.min;
    const value = this.value - this.min;
    this.percent = (100 * value) / max;
    if (this.percent > 50) this.color = 'primary';
    else this.color = 'warn';
    console.log(max, value, this.percent);
  }
}
