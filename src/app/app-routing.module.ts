import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'web-content/:id',
    loadChildren: () => import('./web-content/web-content.module').then( m => m.WebContentPageModule)
  },
  {
    path: 'check',
    loadChildren: () => import('./check/check.module').then( m => m.CheckPageModule)
  },
  {
    path: 'check2',
    loadChildren: () => import('./check2/check2.module').then( m => m.Check2PageModule)
  },
  {
    path: 'check3',
    loadChildren: () => import('./check3/check3.module').then( m => m.Check3PageModule)
  },
  {
    path: 'check4',
    loadChildren: () => import('./check4/check4.module').then( m => m.Check4PageModule)
  },
  {
    path: 'quizs',
    loadChildren: () => import('./quizs/quizs.module').then( m => m.QuizsPageModule)
  },
  {
    path: 'supp',
    loadChildren: () => import('./supp/supp.module').then( m => m.SuppPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
