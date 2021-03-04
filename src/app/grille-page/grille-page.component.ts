import { GrillService } from './../Services/grill.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-grille-page',
  templateUrl: './grille-page.component.html',
  styleUrls: ['./grille-page.component.scss']
})
export class GrillePageComponent implements OnInit, OnDestroy {

  onMouvementLoading: string;
  onMouvementLoadingSubscription: Subscription;

  constructor(private grillService: GrillService) { }

  ngOnInit(): void {
    this.onMouvementLoadingSubscription = this.grillService.onMouvementLoadingSubject.subscribe(
      onMouvementLoading => this.onMouvementLoading = onMouvementLoading
    );
    this.grillService.emitOnMouvementLoading();
  }

  ngOnDestroy(): void {
    this.onMouvementLoadingSubscription.unsubscribe();
  }

  onHover(): void{
    this.grillService.numberOfHoverAdd();
    if (!this.getOnMouvementLoading) {
      this.grillService.onMouvement();
    }
  }


  getOnMouvementLoading(): boolean {
    if (this.onMouvementLoading === 'true') {
      return true;
    }
    else {
      return false;
    }
  }

}
