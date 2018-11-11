import { CountsComponent } from './counts/counts.component';
import { SummaryComponent } from './summary/summary.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SharedModule } from '../global/shared.module';

@NgModule({
  declarations: [
    AboutComponent,
    SummaryComponent,
    CountsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
