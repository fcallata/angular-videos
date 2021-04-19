import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverso'
})
export class ReversoPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let valueArr = value.split('');
    let reverseArr = valueArr.reverse();
    return reverseArr.join('');
  }

}
