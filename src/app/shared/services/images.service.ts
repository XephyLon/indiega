import { Injectable } from '@angular/core';
import { IMAGES } from '../../mock-db/mock-images';
import { Image } from '../models/images.model';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  getImages(): Promise<Array<Image>> {
    return Promise.resolve(IMAGES)
  }

}
