import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, MatRippleModule, MatCardModule } from '@angular/material';
import { NguCarouselModule } from '@ngu/carousel'

import { HeaderComponent } from './header/header.component';
import { HeroCarouselComponent } from './homepage/hero-carousel/hero-carousel.component';
import { UpcomingComponent } from './homepage/upcoming/upcoming.component';
import { LatestPostsComponent } from './homepage/latest-posts/latest-posts.component';
import { SectionTitleComponent } from './global/section-title/section-title.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroCarouselComponent,
    UpcomingComponent,
    LatestPostsComponent,
    SectionTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    NgSelectModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    NguCarouselModule,
    MatRippleModule,
    MatCardModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
