import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomepageComponent, data: { breadcrumb: 'Home' } },
  { path: 'about-us', component: AboutComponent, data: { breadcrumb: 'About Us' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
