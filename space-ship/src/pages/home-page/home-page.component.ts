import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouteService } from 'src/services/routeService';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent {
  public title: string = 'Space ship'

  constructor(public router: Router, private routeService: RouteService) {}

  public navigateTo(type: number) {
    this.routeService.setTypeRoute(type);
    this.router.navigate(['ship-detail']);
  }
}
