import { Injectable } from '@angular/core';
import { TITLES } from '../mock-db/mock-upcoming';

@Injectable({
  providedIn: 'root'
})
export class UpcomingService {
  getTitles(): Promise<Array<Object>> {
    return Promise.resolve(TITLES)
  }
}
