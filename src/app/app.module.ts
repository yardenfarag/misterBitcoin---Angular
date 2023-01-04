import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { ContactPageComponent } from './views/contact-page/contact-page.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { ContactEditComponent } from './views/contact-edit-page/contact-edit-page.component';
import { ContactDetailsPageComponent } from './views/contact-details-page/contact-details-page.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartComponent } from './cmps/chart/chart.component';
import { StatisticPageComponent } from './views/statistic-page/statistic-page.component';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { ProfilePageComponent } from './views/profile-page/profile-page.component';
import { SignupPageComponent } from './views/signup-page/signup-page.component';
import { MoveListComponent } from './cmps/move-list/move-list.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { NftListComponent } from './cmps/nft-list/nft-list.component';
import { NftPageComponent } from './views/nft-page/nft-page.component';
import { UserMsgComponent } from './cmps/user-msg/user-msg.component';
import { CommonModule } from '@angular/common';
import { CoinGameComponent } from './cmps/coin-game/coin-game.component';
import { GamePageComponent } from './views/game-page/game-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactPageComponent,
    HomePageComponent,
    ContactEditComponent,
    ContactDetailsPageComponent,
    ContactFilterComponent,
    ContactListComponent,
    ContactPreviewComponent,
    AppHeaderComponent,
    ChartComponent,
    StatisticPageComponent,
    ProfilePageComponent,
    SignupPageComponent,
    MoveListComponent,
    TimeAgoPipe,
    NftListComponent,
    NftPageComponent,
    UserMsgComponent,
    CoinGameComponent,
    GamePageComponent,
    
  ],
  imports: [
    BrowserAnimationsModule,
    NgxChartsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports:[TimeAgoPipe],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
