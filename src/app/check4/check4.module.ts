import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Check4PageRoutingModule } from './check4-routing.module';

import { Check4Page } from './check4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Check4PageRoutingModule
  ],
  declarations: [Check4Page]
})
export class Check4PageModule {}
