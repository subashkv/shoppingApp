import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tax'
})
export class TaxPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    var cgst = .09 * value;
    var sgst = .09 * value;
    return value + cgst + sgst;
  }

}
