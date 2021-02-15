import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebContentPage } from './web-content.page';

const routes: Routes = [
  {
    path: '',
    component: WebContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebContentPageRoutingModule {}
