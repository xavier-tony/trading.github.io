import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'money-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'trade';
  stocks$: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.stocks$ = db.list('trade').valueChanges();
    this.stocks$.subscribe(console.log);
  }
}
