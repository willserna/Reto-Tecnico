import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { RouteService } from 'src/services/routeService';
import { ShipLaunch } from 'src/store/launch ship/launch-ship.model';
import { LaunchShipService } from 'src/store/launch ship/launch-ship.service';
import { ShipManned } from 'src/store/manned ship/manned-ship.model';
import { MannedShipService } from 'src/store/manned ship/manned-ship.service';
import { ShipUnmanned } from 'src/store/unmanned ship/unmanned-ship.model';
import { UnmannedShipService } from 'src/store/unmanned ship/unmanned-ship.service';
import { DialogDetailComponent } from '../common/dialog detail/dialog-detail.component';
import { DialogFormComponent } from '../common/dialog form/dialog-form.component';

@Component({
  selector: 'ship-detail',
  templateUrl: './ship-detail-page.component.html',
  styleUrls: ['./ship-detail-page.component.scss']
})

export class ShipDetailPageComponent implements OnInit, OnDestroy {
  public title!: string;
  public shipList: Array<any> = [];
  public dialogConfig: MatDialogConfig = new MatDialogConfig();
  private launchShipList$: Subscription = new Subscription;
  private mannedShipList$: Subscription = new Subscription;
  private unmannedShipList$: Subscription = new Subscription;
  private typeRoute!: number;

  constructor(
    private dialog: MatDialog,
    private launchShipService: LaunchShipService,
    private mannedShipService: MannedShipService,
    private unmannedShipService: UnmannedShipService,
    private routeService: RouteService) {
    this.dialogConfig = {
      disableClose: true,
      autoFocus: true
    }
    this.typeRoute = this.routeService.getTypeRoute();
  }

  ngOnInit(): void {
    switch (this.typeRoute) {
      case 1:
          this.title = 'Launch Ship List'
          this.getLaunchShipList();
          break;
      case 2:
          this.title = 'Unmanned Ship List'
          this.getUnmannedShipList();
          break;
      case 3:
          this.title = 'Manned Ship List'
          this.getMannedShipList();
          break;
      default:
          break;
    }
  }

  ngOnDestroy(): void {
    this.launchShipList$?.unsubscribe();
    this.mannedShipList$?.unsubscribe();
    this.unmannedShipList$?.unsubscribe();
  }

  public getLaunchShipList(): void {
    this.launchShipService.getLaunchShipList()
    this.launchShipList$ = this.launchShipService
        .getLaunchShipList$().subscribe((launchShipList: Array<ShipLaunch>) => {
          if(launchShipList) {
            this.shipList = launchShipList
          }
        });
  }

  public getMannedShipList(): void {
    this.mannedShipService.getMannedShipList()
    this.mannedShipList$ = this.mannedShipService
        .getMannedShipList$().subscribe((mannedShipList: Array<ShipManned>) => {
          if(mannedShipList) {
            this.shipList = mannedShipList
          }
        });
  }

  public getUnmannedShipList(): void {
    this.unmannedShipService.getUnmannedShipList()
    this.unmannedShipList$ = this.unmannedShipService
        .getUnmannedShipList$().subscribe((unmannedShipList: Array<ShipUnmanned>) => {
          if(unmannedShipList) {
            this.shipList = unmannedShipList
          }
        });
  }

  public openShipDetailDialog(ship: any): void {
    const dialogRef = this.dialog.open(DialogDetailComponent, {
      disableClose: false,
      autoFocus: true,
      data: {
        ship: ship
      }
    });
  }

  public openForm(): void {
    const dialogRef = this.dialog.open(DialogFormComponent, {
      disableClose: false,
      autoFocus: true,
      data: {
        ship: null,
        edition: false
      }
    });
  }

  public editForm(ship: ShipLaunch): void {
    const dialogRef = this.dialog.open(DialogFormComponent, {
      disableClose: false,
      autoFocus: true,
      data: {
        ship: ship,
        edition: true
      }
    })
  }

  public deleteShip(id: string): void {
    switch (this.typeRoute) {
      case 1:
        this.launchShipService.deleteLaunchShip(id);
        break;
      case 2:
        this.unmannedShipService.deleteUnmannedShip(id);
        break;
      case 3:
        this.mannedShipService.deleteMannedShip(id);
        break;
      default:
        break;
    }
  }
}
