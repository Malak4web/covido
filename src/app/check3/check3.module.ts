import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Check3PageRoutingModule } from './check3-routing.module';

import { Check3Page } from './check3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Check3PageRoutingModule
  ],
  declarations: [Check3Page]
})
export class Check3PageModule {}
