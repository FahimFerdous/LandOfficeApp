import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddEmployeeInfoPage } from './add-employee-info.page';

const routes: Routes = [
  {
    path: '',
    component: AddEmployeeInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddEmployeeInfoPage]
})
export class AddEmployeeInfoPageModule {}
