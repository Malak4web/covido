import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Check2PageRoutingModule } from './check2-routing.module';

import { Check2Page } from './check2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Check2PageRoutingModule
  ],
  declarations: [Check2Page]
})
export class Check2PageModule {}
