import * as UnmannedShipActions from './unmanned-ship.actions';

import { Action, createReducer, on } from '@ngrx/store';
import { ShipUnmanned } from './unmanned-ship.model';

export const unMannedShipFeatureKey = 'unMannedShip';

export interface UnmannedShipState {
  unMannedShipList: Array<ShipUnmanned>;
}

export const initialState: UnmannedShipState = {
  unMannedShipList: []
};

const unMannedShipReducer = createReducer(
  initialState,
  on(UnmannedShipActions.GET_UNMANNED_SHIP_LIST, (state: any) => state),
  on(UnmannedShipActions.GET_UNMANNED_SHIP_LIST_FAILURE, (state: any) => state),
  on(UnmannedShipActions.GET_UNMANNED_SHIP_LIST_SUCCESS, (state: any, { unMannedShipList }: any) => ({
    ...state,
    unMannedShipList
  })),
);

export function reducer(
  state: UnmannedShipState | undefined,
  action: Action
): UnmannedShipState {
  return unMannedShipReducer(state, action);
}

export function metaReducer(reducer: UnmannedShipState): UnmannedShipState {
  return reducer
}
