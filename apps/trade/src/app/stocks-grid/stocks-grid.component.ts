import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
  AfterViewInit,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { IStock, ITrade } from '../home/trade.interface';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'money-stocks-grid',
  templateUrl: './stocks-grid.component.html',
  styleUrls: ['./stocks-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class StocksGridComponent implements AfterViewInit, OnChanges {
  @Input() displayedColumns: string[];
  @Input() trade: ITrade;
  @ViewChild(MatSort) sort: MatSort;
  @Output() moveToWatchListEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();
  @Output() editEvent = new EventEmitter();
  @Output() addEvent = new EventEmitter();
  dataSource;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.trade.stocks);
    this.dataSource.sort = this.sort;
  }

  add(e: MouseEvent) {
    this.addEvent.emit();
    e.stopPropagation();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  trackByStock = (index, stock: IStock) => index;

  moveToWatchList(stock: IStock) {
    this.moveToWatchListEvent.emit(stock);
  }

  delete(stock: IStock) {
    this.deleteEvent.emit(stock);
  }

  edit(stock: IStock) {
    this.editEvent.emit(stock);
  }
}
