import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tokenizer',
})
export class TokenizePipe implements PipeTransform {
  transform(inputString: string, delimiter = ', '): string {
    if (!inputString) {
      return '';
    }
  
    return inputString.split('').join(delimiter);
  }
  
}
