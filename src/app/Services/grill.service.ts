import { BouleColorService } from './boulecolor.service';
import { Injectable} from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Injectable()
export class GrillService{

    private onMouvementLoading: string;
    onMouvementLoadingSubject = new Subject<string>();

    private numberOfHover: number;
    private timeToGetPanel: number;
    private timeToBeginLoading: number;
    private minNumberOfHoverToGetPanel: number;
    private minNumberOfHoberToBeginLoading: number;

    bouleColorFermer: string;
    bouleColorFermerSubscription: Subscription;

    constructor(private bouleColorService: BouleColorService) {
        this.onMouvementLoading = 'false';
        this.numberOfHover = 0;
        this.timeToGetPanel = 2000;
        this.timeToBeginLoading = 1000;
        this.minNumberOfHoverToGetPanel = 30;
        this.minNumberOfHoberToBeginLoading = 15;

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
        this.numberOfHover++;
        console.log('number of hover : ' + this.numberOfHover);
    }

    onMouvement(): void{
        if (this.onMouvementLoading === 'false' && !this.getBouleColorFermer()) {
            setTimeout(() => {
                if (this.numberOfHover > this.minNumberOfHoberToBeginLoading) {
                    this.onMouvementLoadingChange('true');
                    setTimeout(() => {
                        if (this.numberOfHover > this.minNumberOfHoverToGetPanel) {
                            this.bouleColorService.ouvrirBouleColor();
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
                else {
                    this.numberOfHover = 0;
                }
            }, this.timeToBeginLoading);
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
