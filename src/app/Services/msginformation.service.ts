import { Subject } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class MsgInformationService{

    private afficheMsg: string;
    private msgInformation: string;
    timeToHideMsg: number;

    constructor() {
        this.afficheMsg = 'false';
        this.msgInformation = '';
        this.timeToHideMsg = 6000;
    }

    afficheMsgSubject = new Subject<string>();
    msgInformationSubject = new Subject<string>();

    emitMsgInformations(): void{
        this.afficheMsgSubject.next(this.afficheMsg.slice());
        this.msgInformationSubject.next(this.msgInformation.slice());
    }

    afficherMsg(msg: string ): void{
        this.afficheMsg = 'true';
        this.msgInformation = msg;
        this.emitMsgInformations();
        setTimeout(() => {
            this.cacherMsg();
        }, this.timeToHideMsg);
    }

    cacherMsg(): void{
        this.afficheMsg = 'false';
        this.emitMsgInformations();
    }
}
