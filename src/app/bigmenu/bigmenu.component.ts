import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BouleColorService } from '../Services/boulecolor.service';

@Component({
  selector: 'app-bigmenu',
  templateUrl: './bigmenu.component.html',
  styleUrls: ['./bigmenu.component.scss']
})
export class BigmenuComponent implements OnInit, OnDestroy {

  bouleColorFermer: string;
  bouleColorFermerSubscription: Subscription;

  constructor(private bouleColorService: BouleColorService) { }

  ngOnInit(): void {
    this.bouleColorFermerSubscription = this.bouleColorService.bouleColorFermerSubject.subscribe(
      bouleColorFermer => this.bouleColorFermer = bouleColorFermer
    );
    this.bouleColorService.emitBouleColorFermer();
  }

  ngOnDestroy(): void {
    this.bouleColorFermerSubscription.unsubscribe();
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
