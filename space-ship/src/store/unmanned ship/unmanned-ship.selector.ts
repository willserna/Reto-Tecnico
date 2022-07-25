import { UnmannedShipState, unMannedShipFeatureKey } from './unmanned-ship.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getUnmannedShipState = createFeatureSelector<UnmannedShipState>(
  unMannedShipFeatureKey
);

export const getUnmannedShipList = createSelector(
  getUnmannedShipState,
  (state: UnmannedShipState) => state.unMannedShipList
);
