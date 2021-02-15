import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Check2Page } from './check2.page';

const routes: Routes = [
  {
    path: '',
    component: Check2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Check2PageRoutingModule {}
