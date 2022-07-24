import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent {
  public title: string = 'Space ship'

  constructor(public router: Router){}

  public navigateTo() {
    this.router.navigate(['ship-detail']);
  }
}
