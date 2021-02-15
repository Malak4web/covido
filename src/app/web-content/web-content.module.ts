import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebContentPageRoutingModule } from './web-content-routing.module';

import { WebContentPage } from './web-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebContentPageRoutingModule
  ],
  declarations: [WebContentPage]
})
export class WebContentPageModule {}
