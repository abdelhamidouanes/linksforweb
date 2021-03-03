import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-msg-information',
  templateUrl: './msg-information.component.html',
  styleUrls: ['./msg-information.component.scss']
})
export class MsgInformationComponent implements OnInit {

  @Input() msg: string;
  constructor() { }

  ngOnInit(): void {
  }

}
