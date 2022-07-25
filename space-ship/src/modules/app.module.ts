import * as launchShipStore from '../store/launch ship/launch-ship.reducer';
import * as mannedShipStore from '../store/manned ship/manned-ship.reducer';
import * as unMannedShipStore from '../store/unmanned ship/unmanned-ship.reducer';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from 'src/pages/home-page/home-page.component';
import { ShipDetailPageComponent } from 'src/pages/ship-detail-page/ship-detail-page.component';
import { AppComponent } from 'src/pages/common/app.component';
import { ToolbarComponent } from 'src/pages/common/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { DialogDetailComponent } from 'src/pages/common/dialog detail/dialog-detail.component';
import { LaunchShipService } from '../store/launch ship/launch-ship.service';
import { LaunchShipEffects } from '../store/launch ship/launch-ship.effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { DialogFormComponent } from 'src/pages/common/dialog form/dialog-form.component';
import { RouteService } from '../services/routeService';
import { UnmannedShipEffects } from 'src/store/unmanned ship/unmanned-ship.effects';
import { UnmannedShipService } from 'src/store/unmanned ship/unmanned-ship.service';
import { MannedShipService } from 'src/store/manned ship/manned-ship.service';
import { MannedShipEffects } from 'src/store/manned ship/manned-ship.effects';

@NgModule({
  declarations: [
    AppComponent,
    DialogDetailComponent,
    DialogFormComponent,
    HomePageComponent,
    ShipDetailPageComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    EffectsModule.forRoot([LaunchShipEffects, MannedShipEffects, UnmannedShipEffects]),
    StoreModule.forFeature(
      launchShipStore.launchShipFeatureKey,
      launchShipStore.reducer
    ),
    StoreModule.forFeature(
      mannedShipStore.mannedShipFeatureKey,
      mannedShipStore.reducer
    ),
    StoreModule.forFeature(
      unMannedShipStore.unMannedShipFeatureKey,
      unMannedShipStore.reducer
    ),
    StoreModule.forRoot({}),
    HttpClientModule
  ],
  providers: [LaunchShipService, MannedShipService, UnmannedShipService, RouteService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
