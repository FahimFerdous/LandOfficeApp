import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PourosovaEntryFormPage } from './pourosova-entry-form.page';

const routes: Routes = [
  {
    path: '',
    component: PourosovaEntryFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PourosovaEntryFormPage]
})
export class PourosovaEntryFormPageModule {}
