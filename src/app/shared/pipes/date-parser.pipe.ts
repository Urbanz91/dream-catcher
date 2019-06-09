import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateParser'
})
export class DateParserPipe implements PipeTransform {

  public transform(value: string, args?: string): string {
    return moment(value).format(args);
  }

}
