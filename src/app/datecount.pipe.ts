import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'datecount'
})
export class DatecountPipe implements PipeTransform {

 transform(date: Date | string, day: number, format: string = 'yyyy-MM-dd'): string {
  date = new Date(date);
  date.setDate(date.getDate()-day);
  return new DatePipe('en-US').transform(date, format);
}
}
