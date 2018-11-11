import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './homepage/homepage.module#HomepageModule',
    data: {breadrumb: 'Home'}
  },
  {
    path: 'about-us',
    loadChildren: './about/about.module#AboutModule',
    data: {breadcrumb: 'About'}
  },
  {
    path: 'faq',
    loadChildren: './core/core.module#CoreModule',
    data: { breadcrumb: 'Core Values' }
  },
  {
    path: '**',
    loadChildren: './global/not-found/not-found.module#NotFoundModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
