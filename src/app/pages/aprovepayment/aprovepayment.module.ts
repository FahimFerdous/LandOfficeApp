import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AprovepaymentPage } from './aprovepayment.page';

const routes: Routes = [
  {
    path: '',
    component: AprovepaymentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AprovepaymentPage]
})
export class AprovepaymentPageModule {}
