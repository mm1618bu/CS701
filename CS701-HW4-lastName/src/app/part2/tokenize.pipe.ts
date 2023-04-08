import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tokenize',
})
export class TokenizePipe implements PipeTransform {
  transform(inputString: string, delimiter = ', ',inputText:string): string {
    if (!inputString) {
      return '';
    }
  
    return inputString.split(delimiter).join(', ');
  }
  
}
