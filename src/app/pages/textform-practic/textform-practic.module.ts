import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TextformPracticPage } from './textform-practic.page';

const routes: Routes = [
  {
    path: '',
    component: TextformPracticPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TextformPracticPage]
})
export class TextformPracticPageModule {}
