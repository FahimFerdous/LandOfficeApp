import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DropdownInputPagePage } from './dropdown-input-page.page';

const routes: Routes = [
  {
    path: '',
    component: DropdownInputPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DropdownInputPagePage]
})
export class DropdownInputPagePageModule {}
