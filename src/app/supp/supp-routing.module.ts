import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuppPage } from './supp.page';

const routes: Routes = [
  {
    path: '',
    component: SuppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuppPageRoutingModule {}
