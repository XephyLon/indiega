import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatRippleModule,
  MatCardModule,
  MatTabsModule,
  MatDividerModule,
  MatInputModule
} from "@angular/material";
import { NguCarouselModule } from "@ngu/carousel";

import { HeaderComponent } from "./header/header.component";
import { HeroCarouselComponent } from "./homepage/hero-carousel/hero-carousel.component";
import { UpcomingComponent } from "./homepage/upcoming/upcoming.component";
import { LatestPostsComponent } from "./homepage/latest-posts/latest-posts.component";
import { SectionTitleComponent } from "./global/section-title/section-title.component";
import { TestimonialsComponent } from "./testimonials/testimonials.component";
import { TabsComponent } from "./homepage/tabs/tabs.component";
import { FaqComponent } from './faq/faq.component';
import { NewsletterComponent } from './homepage/newsletter/newsletter.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroCarouselComponent,
    UpcomingComponent,
    LatestPostsComponent,
    SectionTitleComponent,
    TestimonialsComponent,
    TabsComponent,
    FaqComponent,
    NewsletterComponent,
    FooterComponent
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
    MatTabsModule,
    MatDividerModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
