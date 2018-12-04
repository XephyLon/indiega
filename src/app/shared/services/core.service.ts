import { CORE_VALUES } from '../../mock-db/mock-core';
import { Injectable } from '@angular/core';
import { CoreValues } from '../models/core.model';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  // tslint:disable-next-line:array-type
  getCore(): Promise<CoreValues[]> {
    return Promise.resolve(CORE_VALUES)
  }
}
