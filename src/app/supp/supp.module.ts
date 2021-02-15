import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuppPageRoutingModule } from './supp-routing.module';

import { SuppPage } from './supp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuppPageRoutingModule
  ],
  declarations: [SuppPage]
})
export class SuppPageModule {}
