import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generategraduation',
  templateUrl: './generategraduation.component.html',
  styleUrls: ['./generategraduation.component.scss']
})
export class GenerategraduationComponent implements OnInit {

  opacity: number;
  result: string;
  constructor() { }

  ngOnInit(): void {
    this.opacity = 1;
    this.result = '';
  }

  onClick(): void {
    for (let index = 1; index <= 50; index++) {
      this.result = this.result + '.info-graduation:nth-child(' + index + ') { opacity: ' + this.opacity + '; } \n \n';
      this.opacity = this.opacity - 0.02;
    }
  }
}
