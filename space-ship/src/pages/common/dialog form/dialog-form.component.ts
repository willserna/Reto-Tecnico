import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouteService } from 'src/services/routeService';
import { ShipLaunch } from 'src/store/launch ship/launch-ship.model';
import { LaunchShipService } from 'src/store/launch ship/launch-ship.service';
import { ShipManned } from 'src/store/manned ship/manned-ship.model';
import { MannedShipService } from 'src/store/manned ship/manned-ship.service';
import { ShipUnmanned } from 'src/store/unmanned ship/unmanned-ship.model';
import { UnmannedShipService } from 'src/store/unmanned ship/unmanned-ship.service';

@Component({
  selector: 'form-dialog',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class DialogFormComponent implements OnInit {
  public title: string = 'Create ship';
  public createShipForm!: FormGroup;
  public launchShip!: ShipLaunch;
  public mannedShip!: ShipManned;
  public unmannedShip!: ShipUnmanned;
  public currentship!: any;
  public edition: Boolean = false;
  public typeRoute!: number;

  constructor(
    private dialogRef: MatDialogRef<DialogFormComponent>,
    private formBuilder: FormBuilder,
    private launchShipService: LaunchShipService,
    private mannedShipService: MannedShipService,
    private unmannedShipService: UnmannedShipService,
    private routeService: RouteService,
    @Inject(MAT_DIALOG_DATA) public ship: any
  ) {
    this.typeRoute = this.routeService.getTypeRoute();
  }

  ngOnInit(): void {
    this.currentship = this.ship.ship;
    this.edition = this.ship.edition;
    switch (this.typeRoute) {
      case 1:
          this.buildLaunchShipForm();
          break;
      case 2:
          this.buildUnmannedShipForm();
          break;
      case 3:
          this.buildMannedShipForm();
          break;
      default:
          break;
    }

  }

  get cf(): any {
    return this.createShipForm.controls;
  }

  public buildLaunchShipForm(): void {
    if(this.edition) {
      this.createShipForm = this.formBuilder.group({
        name: [this.currentship.name, Validators.required],
        description: [this.currentship.description, Validators.required],
        fuelType: [this.currentship.fuelType, Validators.required],
        capacity: [this.currentship.capacity, Validators.required],
        power: [this.currentship.power, Validators.required],
        weight: [this.currentship.weight, Validators.required]
      })
    } else {
      this.createShipForm = this.formBuilder.group({
        name: [null, Validators.required],
        description: [null, Validators.required],
        fuelType: [null, Validators.required],
        capacity: [null, Validators.required],
        power: [null, Validators.required],
        weight: [null, Validators.required]
      })
    }
  }

  public buildMannedShipForm(): void {
    if(this.edition) {
      this.createShipForm = this.formBuilder.group({
        name: [this.currentship.name, Validators.required],
        description: [this.currentship.description, Validators.required],
        fuelType: [this.currentship.fuelType, Validators.required],
        weight: [this.currentship.weight, Validators.required],
        personAmount: [this.currentship.personAmount, Validators.required],
        use: [this.currentship.use, Validators.required],
      })
    } else {
      this.createShipForm = this.formBuilder.group({
        name: [null, Validators.required],
        description: [null, Validators.required],
        fuelType: [null, Validators.required],
        weight: [null, Validators.required],
        personAmount: [null, Validators.required],
        use: [null, Validators.required]
      })
    }
  }

  public buildUnmannedShipForm(): void {
    if(this.edition) {
      this.createShipForm = this.formBuilder.group({
        name: [this.currentship.name, Validators.required],
        description: [this.currentship.description, Validators.required],
        fuelType: [this.currentship.fuelType, Validators.required],
        speed: [this.currentship.speed, Validators.required],
        thrust: [this.currentship.thrust, Validators.required],
        destination: [this.currentship.destination, Validators.required],
      })
    } else {
      this.createShipForm = this.formBuilder.group({
        name: [null, Validators.required],
        description: [null, Validators.required],
        fuelType: [null, Validators.required],
        speed: [null, Validators.required],
        thrust: [null, Validators.required],
        destination: [null, Validators.required]
      })
    }
  }

  public submit(): void {
    switch (this.typeRoute) {
      case 1:
          this.evaluateLaunchShipForm();
          break;
      case 2:
          this.evaluateUnmannedShipForm();
          break;
      case 3:
          this.evaluateMannedShipForm();
          break;
      default:
          break;
    }
  }

  public evaluateLaunchShipForm(): void {
    if(this.createShipForm.invalid) {
      return;
    }
    this.launchShip = {
      name: this.createShipForm.value.name,
      description: this.createShipForm.value.description,
      fuelType: this.createShipForm.value.fuelType,
      capacity: this.createShipForm.value.capacity,
      power: this.createShipForm.value.power,
      weight: this.createShipForm.value.weight
    }
    if(this.edition) {
      this.editLaunchShip();
    } else {
      this.createLaunchShip();
    }
  }

  public evaluateMannedShipForm(): void {
    if(this.createShipForm.invalid) {
      return;
    }
    this.mannedShip = {
      name: this.createShipForm.value.name,
      description: this.createShipForm.value.description,
      fuelType: this.createShipForm.value.fuelType,
      weight: this.createShipForm.value.weight,
      personAmount: this.createShipForm.value.personAmount,
      use: this.createShipForm.value.use
    }
    if(this.edition) {
      this.editMannedShip();
    } else {
      this.createMannedShip();
    }
  }

  public evaluateUnmannedShipForm(): void {
    if(this.createShipForm.invalid) {
      return;
    }
    this.unmannedShip = {
      name: this.createShipForm.value.name,
      description: this.createShipForm.value.description,
      fuelType: this.createShipForm.value.fuelType,
      speed: this.createShipForm.value.speed,
      thrust: this.createShipForm.value.thrust,
      destination: this.createShipForm.value.destination
    }
    if(this.edition) {
      this.editUnmannedShip();
    } else {
      this.createUnmannedShip();
    }
  }

  public createLaunchShip(): void {
    this.launchShipService.createLaunchShip(this.launchShip);
    this.dialogRef.close()
  }

  public editLaunchShip(): void {
    this.launchShipService.updateLaunchShip(this.launchShip, this.currentship._id || '');
    this.dialogRef.close()
  }

  public createMannedShip(): void {
    this.mannedShipService.createMannedShip(this.mannedShip);
    this.dialogRef.close()
  }

  public editMannedShip(): void {
    this.mannedShipService.updateMannedShip(this.mannedShip, this.currentship._id || '');
    this.dialogRef.close()
  }

  public createUnmannedShip(): void {
    this.unmannedShipService.createUnmannedShip(this.unmannedShip);
    this.dialogRef.close()
  }

  public editUnmannedShip(): void {
    this.unmannedShipService.updateUnmannedShip(this.unmannedShip, this.currentship._id || '');
    this.dialogRef.close()
  }

}
