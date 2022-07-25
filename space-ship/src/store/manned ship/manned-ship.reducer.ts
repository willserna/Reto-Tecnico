import * as MannedShipActions from './manned-ship.actions';

import { Action, createReducer, on } from '@ngrx/store';
import { ShipManned } from './manned-ship.model';

export const mannedShipFeatureKey = 'mannedShip';

export interface MannedShipState {
  mannedShipList: Array<ShipManned>;
}

export const initialState: MannedShipState = {
  mannedShipList: []
};

const mannedShipReducer = createReducer(
  initialState,
  on(MannedShipActions.GET_MANNED_SHIP_LIST, (state: any) => state),
  on(MannedShipActions.GET_MANNED_SHIP_LIST_FAILURE, (state: any) => state),
  on(MannedShipActions.GET_MANNED_SHIP_LIST_SUCCESS, (state: any, { mannedShipList }: any) => ({
    ...state,
    mannedShipList
  })),
);

export function reducer(
  state: MannedShipState | undefined,
  action: Action
): MannedShipState {
  return mannedShipReducer(state, action);
}

export function metaReducer(reducer: MannedShipState): MannedShipState {
  return reducer
}
