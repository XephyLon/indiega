import { Image } from './../../shared/images.model';
import { ImagesService } from './../../shared/images.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass']
})
export class GalleryComponent implements OnInit {
  public images: Array<Image> = []

  constructor(private imageService: ImagesService) { }

  ngOnInit(): void {
    this.imageService.getImages()
      .then(images => this.images = images)
  }

}
