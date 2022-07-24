import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ShipLaunch } from 'src/store/ship/ship.model';

@Component({
  selector: 'detail-dialog',
  templateUrl: './dialog-detail.component.html',
  styleUrls: ['./dialog-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class DialogDetailComponent implements OnInit {
  public title: string = 'Ship Detail';
  public currentship!: ShipLaunch;

  constructor(
    private dialogRef: MatDialogRef<DialogDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public ship: ShipLaunch
  ) {}

  ngOnInit(): void {
    this.currentship = this.ship
  }

}
