import { GrillService } from './../Services/grill.service';
import { BouleColorService } from './../Services/boulecolor.service';
import { MsgInformationService } from './../Services/msginformation.service';
import { imgFolder } from './../Models/Constantes.model';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-boule-color',
  templateUrl: './boule-color.component.html',
  styleUrls: ['./boule-color.component.scss']
})
export class BouleColorComponent implements OnInit, OnDestroy {
  @Input() colorTimer: number;
  imgFolder: string;
  bouleColorFermer: string;
  bouleColorFermerSubscription: Subscription;

  affichePanel: string;
  affichePanelSubscription: Subscription;
  constructor(private msgInformationService: MsgInformationService,
              private bouleColorService: BouleColorService,
              private grillService: GrillService) { }

  ngOnInit(): void {
    this.imgFolder = imgFolder;

    this.bouleColorFermerSubscription = this.bouleColorService.bouleColorFermerSubject.subscribe(
      bouleColorFermer => this.bouleColorFermer = bouleColorFermer
    );
    this.bouleColorService.emitBouleColorFermer();


    this.affichePanelSubscription = this.grillService.affichePanelSubject.subscribe(
      affichePanel => this.affichePanel = affichePanel
    );
    this.grillService.emitAffichePanel();
  }

  ngOnDestroy(): void {
    this.bouleColorFermerSubscription.unsubscribe();
    this.affichePanelSubscription.unsubscribe();
  }

  getColorTimerString(): string{
    return (this.colorTimer / 1000) + ' s';
  }

  onClickX(): void{
    this.bouleColorService.fermerBouleColor();
    this.msgInformationService.afficherMsg('Shake the mouse to open the color panel again.');
  }

  getBouleColorFermer(): boolean {
    if (this.bouleColorFermer === 'true') {
      return true;
    }
    else {
      return false;
    }
  }

    getAffichePanel(): boolean {
    if (this.affichePanel === 'true') {
      return true;
    }
    else {
      return false;
    }
  }
}
