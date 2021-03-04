import { BouleColorService } from './boulecolor.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class GrillService{

    private onMouvementLoading: string;
    onMouvementLoadingSubject = new Subject<string>();

    private affichePanel: string;
    affichePanelSubject = new Subject<string>();

    private numberOfHover: number;
    private timeToGetPanel: number;
    private timeToBeginLoading: number;
    private minNumberOfHoverToGetPanel: number;
    private minNumberOfHoberToBeginLoading: number;


    constructor(private bouleColorService: BouleColorService) {
        this.onMouvementLoading = 'false';
        this.affichePanel = 'true';
        this.numberOfHover = 0;
        this.timeToGetPanel = 2000;
        this.timeToBeginLoading = 1000;
        this.minNumberOfHoverToGetPanel = 30;
        this.minNumberOfHoberToBeginLoading = 15;
    }

    emitOnMouvementLoading(): void{
        this.onMouvementLoadingSubject.next(this.onMouvementLoading.slice());
    }

    emitAffichePanel(): void{
        this.affichePanelSubject.next(this.affichePanel.slice());
    }

    affichePanelChange(etat: string): void{
        this.affichePanel = etat;
        this.emitAffichePanel();
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
        if ((this.onMouvementLoading === 'false') && (this.affichePanel === 'false')) {
            setTimeout(() => {
                if (this.numberOfHover > this.minNumberOfHoberToBeginLoading) {
                    this.onMouvementLoadingChange('true');
                    setTimeout(() => {
                        if (this.numberOfHover > this.minNumberOfHoverToGetPanel) {
                            this.affichePanelChange('true');
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

}
