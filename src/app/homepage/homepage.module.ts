import { SharedModule } from '../global/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRoutingModule } from './homepage-routing.module';

import { HomepageComponent } from './homepage.component';
import { FaqComponent } from './../faq/faq.component';
import { TabsComponent } from './tabs/tabs.component';
import { LatestPostsComponent } from './latest-posts/latest-posts.component';
import { HeroCarouselComponent } from './hero-carousel/hero-carousel.component';
import { UpcomingComponent } from './upcoming/upcoming.component';

@NgModule({
  declarations: [
    HomepageComponent,
    HeroCarouselComponent,
    UpcomingComponent,
    LatestPostsComponent,
    TabsComponent,
    FaqComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
