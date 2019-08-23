import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckTutorial } from './providers/check-tutorial.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tutorial',
    pathMatch: 'full'
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./pages/support/support.module').then(m => m.SupportModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignUpModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/tabs-page/tabs-page.module').then(m => m.TabsModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then(m => m.TutorialModule),
    canLoad: [CheckTutorial]
  },  { path: 'user-info', loadChildren: './pages/user-info/user-info.module#UserInfoPageModule' },
  { path: 'dropdown-input-page', loadChildren: './pages/dropdown-input-page/dropdown-input-page.module#DropdownInputPagePageModule' },
  { path: 'pourosova-entry-form', loadChildren: './pages/pourosova-entry-form/pourosova-entry-form.module#PourosovaEntryFormPageModule' },
  { path: 'hat-entry-form', loadChildren: './pages/hat-entry-form/hat-entry-form.module#HatEntryFormPageModule' },
  { path: 'licence-entry-form', loadChildren: './pages/licence-entry-form/licence-entry-form.module#LicenceEntryFormPageModule' },
  { path: 'record-info-input-form', loadChildren: './pages/record-info-input-form/record-info-input-form.module#RecordInfoInputFormPageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
