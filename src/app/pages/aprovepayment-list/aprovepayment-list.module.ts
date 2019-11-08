import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AprovepaymentListPage } from './aprovepayment-list.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

const routes: Routes = [
  {
    path: '',
    component: AprovepaymentListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxDatatableModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AprovepaymentListPage]
})
export class AprovepaymentListPageModule {}
