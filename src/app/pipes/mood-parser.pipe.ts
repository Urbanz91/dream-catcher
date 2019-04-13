import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moodParser'
})
export class MoodParserPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value <= 10) {
      return 'poop';
    } else if (value > 10 && value <= 25) {
      return 'meh';
    } else if (value > 25 && value <= 50) {
      return 'smile';
    } else if (value > 50 && value <= 75) {
      return 'smile-beam';
    } else if (value > 75 && value <= 90) {
      return 'grin-beam';
    } else if (value > 90 && value <= 100) {
      return 'laugh-beam';
    }
    return null;
  }

}
