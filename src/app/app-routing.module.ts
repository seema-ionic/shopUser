import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./loginModule/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./loginModule/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./homeModule/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'search-location',
    loadChildren: () => import('./homeModule/search-location/search-location.module').then( m => m.SearchLocationPageModule)
  },
  {
    path: 'patientform',
    loadChildren: () => import('./patientform/patientform.module').then( m => m.PatientformPageModule)
  },
  {
    path: 'history-list',
    loadChildren: () => import('./order/history-list/history-list.module').then( m => m.HistoryListPageModule)
  },
  {
    path: 'patient-list',
    loadChildren: () => import('./order/patient-list/patient-list.module').then( m => m.PatientListPageModule)
  },
  {
    path: 'patient-details',
    loadChildren: () => import('./order/patient-details/patient-details.module').then( m => m.PatientDetailsPageModule)
  },
  {
    path: 'search-shop',
    loadChildren: () => import('./homeModule/search-shop/search-shop.module').then( m => m.SearchShopPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
