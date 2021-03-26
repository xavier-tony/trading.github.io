import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, Subject } from 'rxjs';
import { StocksService } from './stocks.service';

@Component({
  selector: 'money-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'trade';
  stocks$: Observable<any[]>;
  

  constructor(public db: AngularFireDatabase, private stockService:StocksService) {
    this.stocks$ = db.list('trade').valueChanges();
    this.stocks$.subscribe(console.log);
  
  }

  open() {
    this.stockService.openSidenav$.next(true);
  }

  addNewTrade() {
    this.stockService.addNewTrade$.next();
  }
}
