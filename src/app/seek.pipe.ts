import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seek'
})
export class SeekPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
