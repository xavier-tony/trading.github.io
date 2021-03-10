import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { PositionComponent } from './position/position.component';
import { BuySellProgressComponent } from './buysellprogress/buysellprogress.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { StocksGridComponent } from './stocks-grid/stocks-grid.component';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { ActionComponent } from './action/action.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WatchlistComponent,
    PositionComponent,
    BuySellProgressComponent,
    StocksGridComponent,
    ActionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatProgressBarModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatBadgeModule,
    MatChipsModule,
    MatButtonToggleModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'shawnz-trade'),
    AngularFireDatabaseModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [BrowserAnimationsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
