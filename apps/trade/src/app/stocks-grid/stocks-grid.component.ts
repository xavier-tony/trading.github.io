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
  OnInit,
} from '@angular/core';
import { IStock } from '../home/trade.interface';
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
export class StocksGridComponent implements AfterViewInit, OnInit {
  @Input() displayedColumns: string[];
  @Input() stocks: IStock[];
  @ViewChild(MatSort) sort: MatSort;
  dataSource;
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.stocks);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  trackByStock = (index, stock: IStock) => index;
}
