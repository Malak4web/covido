import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Check3Page } from './check3.page';

const routes: Routes = [
  {
    path: '',
    component: Check3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Check3PageRoutingModule {}
