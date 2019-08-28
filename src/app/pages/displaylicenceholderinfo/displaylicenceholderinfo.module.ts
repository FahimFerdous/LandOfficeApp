import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DisplaylicenceholderinfoPage } from './displaylicenceholderinfo.page';

const routes: Routes = [
  {
    path: '',
    component: DisplaylicenceholderinfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DisplaylicenceholderinfoPage]
})
export class DisplaylicenceholderinfoPageModule {}
