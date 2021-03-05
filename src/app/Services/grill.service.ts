import { BouleColorService } from './boulecolor.service';
import { Injectable} from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Injectable()
export class GrillService{

    private onMouvementLoading: string;
    onMouvementLoadingSubject = new Subject<string>();

    private numberOfHover: number;
    private timeToGetPanel: number;
    private minNumberOfHoverToGetPanel: number;

    bouleColorFermer: string;
    bouleColorFermerSubscription: Subscription;

    constructor(private bouleColorService: BouleColorService) {
        this.onMouvementLoading = 'false';
        this.numberOfHover = 0;
        this.timeToGetPanel = 1000;
        this.minNumberOfHoverToGetPanel = 25;

        this.bouleColorFermerSubscription = this.bouleColorService.bouleColorFermerSubject.subscribe(
        bouleColorFermer => this.bouleColorFermer = bouleColorFermer
        );
        this.bouleColorService.emitBouleColorFermer();
    }

    emitOnMouvementLoading(): void{
        this.onMouvementLoadingSubject.next(this.onMouvementLoading.slice());
    }

    onMouvementLoadingChange(etat: string): void{
        this.onMouvementLoading = etat;
        this.emitOnMouvementLoading();
    }

    numberOfHoverAdd(): void{
        console.log('number of hover' + this.numberOfHover);
        this.numberOfHover++;
    }

    onMouvement(): void{
        if (this.onMouvementLoading === 'false' && this.getBouleColorFermer()) {
            this.onMouvementLoadingChange('true');
            setTimeout(() => {
                if (this.numberOfHover > this.minNumberOfHoverToGetPanel) {
                            this.bouleColorService.ouvrirBouleColor();
                            this.onMouvementLoadingChange('false');
                            this.numberOfHover = 0;
                }
                else {
                            this.onMouvementLoadingChange('false');
                            this.numberOfHover = 0;
                }
            }, this.timeToGetPanel);
        }
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
