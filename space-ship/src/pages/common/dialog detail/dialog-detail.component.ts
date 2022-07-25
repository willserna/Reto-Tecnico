import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouteService } from 'src/services/routeService';

@Component({
  selector: 'detail-dialog',
  templateUrl: './dialog-detail.component.html',
  styleUrls: ['./dialog-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class DialogDetailComponent implements OnInit {
  public title: string = 'Ship Detail';
  public currentship!: any;
  public typeRoute!: number;

  constructor(
    private dialogRef: MatDialogRef<DialogDetailComponent>,
    private routeService: RouteService,
    @Inject(MAT_DIALOG_DATA) public ship: any
  ) {
    this.typeRoute = this.routeService.getTypeRoute();
  }

  ngOnInit(): void {
    this.currentship = this.ship.ship;
  }

}
