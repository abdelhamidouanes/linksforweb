import { Subject } from 'rxjs';

export class BouleColorService{

    private bouleColorFermer: string;
    bouleColorFermerSubject = new Subject<string>();

    constructor() {
        this.bouleColorFermer = 'false';
    }

    emitBouleColorFermer(): void{
        this.bouleColorFermerSubject.next(this.bouleColorFermer.slice());
    }

    ouvrirBouleColor(): void {
        this.bouleColorFermer = 'false';
        this.emitBouleColorFermer();
    }

    fermerBouleColor(): void {
        this.bouleColorFermer = 'true';
        this.emitBouleColorFermer();
    }
}
