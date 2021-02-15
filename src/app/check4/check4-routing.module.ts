import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Check4Page } from './check4.page';

const routes: Routes = [
  {
    path: '',
    component: Check4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Check4PageRoutingModule {}
