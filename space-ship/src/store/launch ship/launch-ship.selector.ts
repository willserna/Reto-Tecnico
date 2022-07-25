import { LaunchShipState, launchShipFeatureKey } from './launch-ship.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getLaunchShipState = createFeatureSelector<LaunchShipState>(
  launchShipFeatureKey
);

export const getLaunchShipList = createSelector(
  getLaunchShipState,
  (state: LaunchShipState) => state.launchShipList
);

