import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UttaradhikariCalculatorPage } from './uttaradhikari-calculator.page';

const routes: Routes = [
  {
    path: '',
    component: UttaradhikariCalculatorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UttaradhikariCalculatorPage]
})
export class UttaradhikariCalculatorPageModule {}
