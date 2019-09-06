import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SubmittaxformPage } from './submittaxform.page';

const routes: Routes = [
  {
    path: '',
    component: SubmittaxformPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SubmittaxformPage]
})
export class SubmittaxformPageModule {}
