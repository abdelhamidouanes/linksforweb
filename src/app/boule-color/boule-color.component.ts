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

  constructor(private msgInformationService: MsgInformationService,
              private bouleColorService: BouleColorService,
              private grillService: GrillService) { }

  ngOnInit(): void {
    this.imgFolder = imgFolder;

    this.bouleColorFermerSubscription = this.bouleColorService.bouleColorFermerSubject.subscribe(
      bouleColorFermer => this.bouleColorFermer = bouleColorFermer
    );
    this.bouleColorService.emitBouleColorFermer();

  }

  ngOnDestroy(): void {
    this.bouleColorFermerSubscription.unsubscribe();
  }

  getColorTimerString(): string{
    return (this.colorTimer / 1000) + ' s';
  }

  onClickX(): void{
    this.bouleColorService.fermerBouleColor();
    this.msgInformationService.afficherMsg('Secouez la souris en haut à droite de l\'écran pour ouvrir à nouveau le panneau de couleurs.');
  }

  getBouleColorFermer(): boolean {
    if (this.bouleColorFermer === 'true') {
      return true;
    }
    else {
      return false;
    }
  }

}
