import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'returnKeyValue'
})
export class ReturnKeyValuePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
