import { CONFESSIONS } from './../mock-db/mock-confessions';
import { Injectable } from '@angular/core';
import { Confession } from './confessions.model';

@Injectable({
  providedIn: 'root'
})
export class ConfessionsService {
  getConfessions(): Promise<Array<Confession>> {
    return Promise.resolve(CONFESSIONS)
  }
}
