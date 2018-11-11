import { CoreComponent } from './core.component';
import { SharedModule } from '../global/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  declarations: [CoreComponent],
  imports: [
    SharedModule,
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
