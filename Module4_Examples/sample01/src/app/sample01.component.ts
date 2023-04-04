import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample01',
  templateUrl: './sample01.component.html',
  styleUrls: ['./sample01.component.css']
})
export class Sample01Component implements OnInit {
  greeting: string;

  constructor(){
    this.greeting = 'Hello';
  }

  ngOnInit(){
    
  }
}
