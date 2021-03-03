import { MsgInformationService } from './../Services/msginformation.service';
import { imgFolder } from './../Models/Constantes.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-boule-color',
  templateUrl: './boule-color.component.html',
  styleUrls: ['./boule-color.component.scss']
})
export class BouleColorComponent implements OnInit {
  @Input() colorTimer: number;
  imgFolder: string;
  fermerBouleColor: boolean;
  constructor(private msgInformationService: MsgInformationService) { }

  ngOnInit(): void {
    this.imgFolder = imgFolder;
    this.fermerBouleColor = false;
  }

  getColorTimerString(): string{
    return (this.colorTimer / 1000) + ' s';
  }

  onClickX(): void{
    this.fermerBouleColor = true;
    this.msgInformationService.afficherMsg('Shake the mouse to open the color panel again.');
  }

}
