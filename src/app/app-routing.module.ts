import { DisplaylicenceholderinfoPage } from './pages/displaylicenceholderinfo/displaylicenceholderinfo.page';
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
  },
  { 
    path: 'user-info',
     loadChildren:()=>import('./pages/user-info/user-info.module').then(m=>m.UserInfoPageModule) 
  },
  { 
    path: 'dropdown-input-page',
     loadChildren:()=>import('./pages/dropdown-input-page/dropdown-input-page.module')
     .then(m=>m.DropdownInputPagePageModule) 
  },
  { 
    path: 'pourosova-entry-form', 
    loadChildren:()=>import('./pages/pourosova-entry-form/pourosova-entry-form.module')
    .then(m=>m.PourosovaEntryFormPageModule) 
  },
  {
     path: 'hat-entry-form', 
     loadChildren:()=>import('./pages/hat-entry-form/hat-entry-form.module')
     .then(m=>m.HatEntryFormPageModule)
  },
  {
     path: 'licence-entry-form',
     loadChildren:()=>import('./pages/licence-entry-form/licence-entry-form.module')
     .then(m=>m.LicenceEntryFormPageModule)
  },
  { 
    path: 'record-info-input-form',
    loadChildren:()=>import('./pages/record-info-input-form/record-info-input-form.module')
    .then(m=>m.RecordInfoInputFormPageModule)
  },
  { 
    path: 'search-licence-page',
     loadChildren:()=>import('./pages/search-licence-page/search-licence-page.module')
     .then(m=>m.SearchLicencePagePageModule)
   },

  { 
    path: 'displaylicenceholderinfo/:pourosovaId/:hatId/:licenceId',
      loadChildren:()=>import('./pages/displaylicenceholderinfo/displaylicenceholderinfo.module').then(
     m=>m.DisplaylicenceholderinfoPageModule) 
    }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
