import { NgModule } from "@angular/core";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from "@angular/flex-layout";
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatMenuModule,
  MatRippleModule,
  MatTabsModule,
  MatToolbarModule
} from "@angular/material";
import { NguCarouselModule } from "@ngu/carousel";
import { SectionTitleComponent } from "./section-title/section-title.component";
import { CommonModule } from '@angular/common';
import { TestimonialsComponent } from "../testimonials/testimonials.component";
import { NewsletterComponent } from "../homepage/newsletter/newsletter.component";
import { BreadcrumbComponent } from "./breadcrumb/breadcrumb.component";
import { RouterModule } from '@angular/router';
import { TitleHeaderComponent } from '../title-header/title-header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    NguCarouselModule,
    MatIconModule,
    MatToolbarModule,
    MatRippleModule,
    MatMenuModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatTabsModule,
    MatButtonModule,
    MatExpansionModule
  ],
  exports: [
    FontAwesomeModule,
    NguCarouselModule,
    MatIconModule,
    MatToolbarModule,
    MatRippleModule,
    MatMenuModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatTabsModule,
    MatButtonModule,
    MatExpansionModule,
    TestimonialsComponent,
    SectionTitleComponent,
    NewsletterComponent,
    BreadcrumbComponent,
    TitleHeaderComponent
  ],
  declarations: [
    TestimonialsComponent,
    SectionTitleComponent,
    NewsletterComponent,
    BreadcrumbComponent,
    TitleHeaderComponent
  ]
})
export class SharedModule {}
