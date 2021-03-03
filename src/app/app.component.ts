import { Subscription } from 'rxjs';
import { MsgInformationService } from './Services/msginformation.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'linksforweb';

  containerClassCounter: number;
  changingColorLoading: boolean;
  timerChangingColor: number;

  msgInformation: string;
  afficheMsg: string;
  msgInformationSubscription: Subscription;
  afficheMsgSubscription: Subscription;

  ngOnInit(): void {
    this.containerClassCounter = 1;
    this.changingColorLoading = false;
    this.timerChangingColor = 3000;

    this.msgInformationSubscription = this.msgInformationService.msgInformationSubject.subscribe(
      msgInformation => this.msgInformation = msgInformation
    );
    this.msgInformationService.emitMsgInformations();

    this.afficheMsgSubscription = this.msgInformationService.afficheMsgSubject.subscribe(
      afficheMsg => this.afficheMsg = afficheMsg
    );
    this.msgInformationService.emitMsgInformations();
  }

  ngOnDestroy(): void {
    this.msgInformationSubscription.unsubscribe();
    this.afficheMsgSubscription.unsubscribe();
  }

  constructor(private msgInformationService: MsgInformationService) {
    this.changeColor();
  }

  changeColor(): void{
    if (!this.changingColorLoading) {
      if (this.containerClassCounter > 6) {
        this.containerClassCounter = 1;
      }
      this.changingColorLoading = true;
      setTimeout(
        () => {
          this.containerClassCounter++;
          this.changingColorLoading = false;
          this.changeColor();
        }, this.timerChangingColor
      );
    }
  }

  getAfficheMsg(): boolean{
    if (this.afficheMsg === 'true') {
      return true;
    }
    else{
      return false;
    }
  }
}
