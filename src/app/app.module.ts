import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatRippleModule,
  MatTabsModule,
  MatToolbarModule
} from "@angular/material";
import { NguCarouselModule } from "@ngu/carousel";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

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
import { WINDOW_PROVIDERS } from "./window.service";
import { TitleHeaderComponent } from './title-header/title-header.component';
import { BreadcrumbComponent } from './global/breadcrumb/breadcrumb.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { SummaryComponent } from './about/summary/summary.component';
import { CountsComponent } from './about/counts/counts.component';

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
    FooterComponent,
    TitleHeaderComponent,
    BreadcrumbComponent,
    HomepageComponent,
    AboutComponent,
    SummaryComponent,
    CountsComponent
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
    MatInputModule,
    FontAwesomeModule
  ],
  providers: [ WINDOW_PROVIDERS ],
  bootstrap: [AppComponent]
})
export class AppModule {}
