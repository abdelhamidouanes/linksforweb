import { BouleColorService } from './../Services/boulecolor.service';
import { Realisation } from './../Models/Realisation.model';
import { imgFolderRealisation } from './../Models/Constantes.model';
import { RealisationService } from './../Services/realisation.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-realisations',
  templateUrl: './realisations.component.html',
  styleUrls: ['./realisations.component.scss']
})
export class RealisationsComponent implements OnInit, OnDestroy {

  realisations: Realisation[];
  realisationsLength: number;
  realisationsSubscription: Subscription;
  imgFolderRealisation: string;
  realisationFilter: string;

  bouleColorFermer: string;
  bouleColorFermerSubscription: Subscription;

  constructor(private realisationService: RealisationService, private bouleColorService: BouleColorService) { }

  ngOnInit(): void {
    this.realisationsSubscription = this.realisationService.realisationSubject.subscribe(
      realisations => this.realisations = realisations
    );
    this.realisationService.emitRealisations();

    this.imgFolderRealisation = imgFolderRealisation;
    this.realisationsLength = this.realisations.length;

    this.bouleColorFermerSubscription = this.bouleColorService.bouleColorFermerSubject.subscribe(
      bouleColorFermer => this.bouleColorFermer = bouleColorFermer
    );
    this.bouleColorService.emitBouleColorFermer();
  }

  ngOnDestroy(): void {
    this.realisationsSubscription.unsubscribe();
    this.bouleColorFermerSubscription.unsubscribe();
  }

  onMouseOver(realisation: Realisation): void {
    realisation.hover = true;
  }
  onMouseOut(realisation: Realisation): void {
    realisation.hover = false;
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
