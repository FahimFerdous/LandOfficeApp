import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HatEntryFormPage } from './hat-entry-form.page';

const routes: Routes = [
  {
    path: '',
    component: HatEntryFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HatEntryFormPage]

})
export class HatEntryFormPageModule { }
