import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { SharedModule } from '../global/shared.module';
import { MasonryGalleryModule } from 'ngx-masonry-gallery';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    SharedModule,
    MasonryGalleryModule
  ]
})
export class GalleryModule { }
