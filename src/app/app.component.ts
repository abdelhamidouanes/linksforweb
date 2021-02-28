import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'linksforweb';
  promiseCounter: Promise<number>;
  containerClassCounter: number;
  changingColorLoading: boolean;
  timerChangingColor: number;

  ngOnInit(): void {
    this.containerClassCounter = 1;
    this.changingColorLoading = false;
    this.timerChangingColor = 3000;
  }
  constructor() {
    this.changeColor();
  }
  changeColor(): void{
    if (!this.changingColorLoading) {
      if (this.containerClassCounter > 6) {
        this.containerClassCounter = 1;
      }
      this.promiseCounter = new Promise((resolve, reject) => {
        this.changingColorLoading = true;
        setTimeout(
          () => {
            console.log('On allume tout !' + this.containerClassCounter);
            resolve(this.containerClassCounter++);
            this.changingColorLoading = false;
            console.log('Appelons celui qui allume tout.' + this.containerClassCounter);
            this.changeColor();
          }, this.timerChangingColor
        );
      });
    }
  }
}
