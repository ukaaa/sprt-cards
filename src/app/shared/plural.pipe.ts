import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plural'
})
export class PluralPipe implements PipeTransform {
  transform(value: any, subject: string | string[]): any {
    if (typeof subject === 'string') {
      return `${value || 'no'} ${subject}${value !== 1 ? 's' : ''}`;
    } else if (subject[0] && subject[1]) {
      return `${value || 'no'} ${value !== 1 ? subject[1] : subject[0]}`;
    }
  }
}
