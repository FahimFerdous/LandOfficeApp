import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RecordInfoInputFormPage } from './record-info-input-form.page';

const routes: Routes = [
  {
    path: '',
    component: RecordInfoInputFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecordInfoInputFormPage]
})
export class RecordInfoInputFormPageModule {}
