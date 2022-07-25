import { MannedShipState, mannedShipFeatureKey } from './manned-ship.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getMannedShipState = createFeatureSelector<MannedShipState>(
  mannedShipFeatureKey
);

export const getMannedShipList = createSelector(
  getMannedShipState,
  (state: MannedShipState) => state.mannedShipList
);
