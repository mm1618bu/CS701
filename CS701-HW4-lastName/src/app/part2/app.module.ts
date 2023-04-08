import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Part2Component } from './part2.component';
import { TokenizePipe } from './tokenize.pipe';

@NgModule({
  declarations: [
    Part2Component,
    TokenizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [Part2Component]
})
export class AppModule { }