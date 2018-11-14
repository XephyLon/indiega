import { Upcoming } from './upcoming.model';
import { Injectable } from '@angular/core';
import { TITLES } from '../mock-db/mock-upcoming';

@Injectable({
  providedIn: 'root'
})
export class UpcomingService {
  getTitles(): Promise<Array<Upcoming>> {
    return Promise.resolve(TITLES)
  }
}
