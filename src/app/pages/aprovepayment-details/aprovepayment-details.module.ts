import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AprovepaymentDetailsPage } from './aprovepayment-details.page';

const routes: Routes = [
  {
    path: '',
    component: AprovepaymentDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AprovepaymentDetailsPage]
})
export class AprovepaymentDetailsPageModule {}
