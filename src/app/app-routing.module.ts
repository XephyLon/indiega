import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CoreComponent } from './core/core.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './global/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, data: { breadcrumb: 'Home' } },
  { path: 'about-us', component: AboutComponent, data: { breadcrumb: 'About Us' } },
  { path: 'faq', component: CoreComponent, data: { breadcrumb: 'faq' } },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
