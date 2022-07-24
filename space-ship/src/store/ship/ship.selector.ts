import { ShipState, shipFeatureKey } from './ship.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getShipState = createFeatureSelector<ShipState>(
  shipFeatureKey
);

export const getLaunchShipList = createSelector(
  getShipState,
  (state: ShipState) => state.launchShipList
);

