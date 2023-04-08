import { Component, OnInit } from '@angular/core';
import { TokenizePipe } from './tokenize.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.css'],
  //providers: [TokenizePipe] // Add the TokenizePipe to the providers array
})
export class Part2Component {
    inputString = '';
    delimiter = '';
    inputText = '';
    onInputChange(){
      console.log(this.inputText);
    }

}

