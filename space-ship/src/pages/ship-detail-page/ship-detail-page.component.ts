import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ShipLaunch } from 'src/store/ship/ship.model';
import { ShipService } from 'src/store/ship/ship.service';
import { DialogDetailComponent } from '../common/dialog detail/dialog-detail.component';

@Component({
  selector: 'ship-detail',
  templateUrl: './ship-detail-page.component.html',
  styleUrls: ['./ship-detail-page.component.scss']
})

export class ShipDetailPageComponent implements OnInit, OnDestroy {
  public title: string = 'Ship List';
  public shipList: Array<ShipLaunch> = [];
  public dialogConfig: MatDialogConfig = new MatDialogConfig();
  private launchShipList$: Subscription = new Subscription;
  private dialogref$: Subscription = new Subscription;

  constructor(private dialog: MatDialog, private shipService: ShipService) {
    this.dialogConfig = {
      disableClose: true,
      autoFocus: true
    }
  }

  ngOnInit(): void {
    this.getLaunchShipList()
  }

  ngOnDestroy(): void {
    this.launchShipList$?.unsubscribe();
  }

  public getLaunchShipList() {
    this.shipService.getLaunchShipList()
    this.launchShipList$ = this.shipService
        .getLaunchShipList$().subscribe((launchShipList: Array<ShipLaunch>) => {
          if(launchShipList) {
            this.shipList = launchShipList
          }
        });
  }

  public openShipDetailDialog(): void {
    const dialogRef = this.dialog.open(DialogDetailComponent, {
      disableClose: false,
      autoFocus: true,
      data: {
        ship: this.shipList[0]
      }
    });
  }
}
