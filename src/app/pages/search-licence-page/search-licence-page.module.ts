import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchLicencePagePage } from './search-licence-page.page';

const routes: Routes = [
  {
    path: '',
    component: SearchLicencePagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchLicencePagePage]
})
export class SearchLicencePagePageModule {}
