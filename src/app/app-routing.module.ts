import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ContactResolver } from './services/contact.resolver';
import { ContactDetailsPageComponent } from './views/contact-details-page/contact-details-page.component';
import { ContactEditComponent } from './views/contact-edit-page/contact-edit-page.component';
import { ContactPageComponent } from './views/contact-page/contact-page.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { NftPageComponent } from './views/nft-page/nft-page.component';
import { ProfilePageComponent } from './views/profile-page/profile-page.component';
import { SignupPageComponent } from './views/signup-page/signup-page.component';
import { StatisticPageComponent } from './views/statistic-page/statistic-page.component';

const routes: Routes = [
  {path:'signup', component: SignupPageComponent},
  {path:'nft', component: NftPageComponent, canActivate: [AuthGuard]},
  {path:'user', component: ProfilePageComponent, canActivate: [AuthGuard]},
  {path:'statistic', component: StatisticPageComponent, canActivate: [AuthGuard]},
  {path: 'contact', component: ContactPageComponent, canActivate: [AuthGuard], children: [
    {path: 'edit/:id', component: ContactEditComponent, resolve: {contact: ContactResolver}, canActivate: [AuthGuard]},
    {path: 'edit', component: ContactEditComponent, canActivate: [AuthGuard]},
    {path: ':id', component: ContactDetailsPageComponent, resolve: {contact: ContactResolver}, canActivate: [AuthGuard]},
  ]},
  {path: '', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
