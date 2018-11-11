import { BreadcrumbComponent } from './global/breadcrumb/breadcrumb.component';
import { NgModule } from "@angular/core";
import { SharedModule } from './global/shared.module';
import { NgSelectModule } from "@ng-select/ng-select";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from './footer/footer.component';
import { WINDOW_PROVIDERS } from "./shared/window.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgSelectModule,
    FormsModule,
    SharedModule
  ],
  providers: [ WINDOW_PROVIDERS ],
  bootstrap: [AppComponent]
})
export class AppModule {}
