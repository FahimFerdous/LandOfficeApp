import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserPaymentDetailsPage } from './user-payment-details.page';

const routes: Routes = [
  {
    path: '',
    component: UserPaymentDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserPaymentDetailsPage]
})
export class UserPaymentDetailsPageModule {}
