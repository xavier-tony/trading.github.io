import { Component, Inject, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';

@Component({
  selector: 'money-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
})
export class ActionComponent implements OnInit {
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
}
