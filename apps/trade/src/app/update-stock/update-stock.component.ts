import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { ActionComponent } from '../action/action.component';

@Component({
  selector: 'money-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateStockComponent implements OnInit {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<ActionComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    public db: AngularFireDatabase
  ) {}
  ngOnInit(): void {
    console.log(this.data);
  }

  addNewTrade(code: string, name: string, owner: string) {
    const tradeRef = this.db.list('trade');
    tradeRef.push({
      code: code,
      name: name,
      owner: owner,
    });
  }

  updateStock(code: string, name: string, count: string) {
    
  }
}
