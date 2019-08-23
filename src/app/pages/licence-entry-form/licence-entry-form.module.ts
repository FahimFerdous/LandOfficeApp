import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LicenceEntryFormPage } from './licence-entry-form.page';

const routes: Routes = [
  {
    path: '',
    component: LicenceEntryFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LicenceEntryFormPage]
})
export class LicenceEntryFormPageModule {}
