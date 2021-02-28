import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menubutton-sm',
  templateUrl: './menubutton-sm.component.html',
  styleUrls: ['./menubutton-sm.component.scss']
})
export class MenubuttonSmComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onMenuClick() {
    this.router.navigate(['menuprincipale']);
  }

}
