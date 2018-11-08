import { DROPDOWN_LINKS, LINKS } from './../mock-db/mock-links';
import { Links } from './links.model';
import { Injectable } from '@angular/core';

@Injectable()
export class LinksService {
  // tslint:disable-next-line:array-type
  getLinks(): Promise<Links[]> {
    return Promise.resolve(LINKS)
  }

  // tslint:disable-next-line:array-type
  getDropdownLinks(): Promise<Links[]> {
    return Promise.resolve(DROPDOWN_LINKS)
  }
}
