import * as shipStore from '../store/ship/ship.reducer';

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
import { ShipService } from '../store/ship/ship.service';
import { ShipEffects } from '../store/ship/ship.effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DialogDetailComponent,
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
    EffectsModule.forRoot([ShipEffects]),
    StoreModule.forFeature(
      shipStore.shipFeatureKey,
      shipStore.reducer
    ),
    StoreModule.forRoot({}),
    HttpClientModule
  ],
  providers: [ShipService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
