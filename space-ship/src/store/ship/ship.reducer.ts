import * as ShipActions from './ship.actions';

import { Action, createReducer, on } from '@ngrx/store';
import { ShipLaunch } from './ship.model';

export const shipFeatureKey = 'ship';

export interface ShipState {
  launchShipList: Array<ShipLaunch>;
}

export const initialState: ShipState = {
  launchShipList: []
};

const shipReducer = createReducer(
  initialState,
  on(ShipActions.GET_LAUNCH_SHIP_LIST, (state: any) => state),
  on(ShipActions.GET_LAUNCH_SHIP_LIST_FAILURE, (state: any) => state),
  on(ShipActions.GET_LAUNCH_SHIP_LIST_SUCCESS, (state: any, { launchShipList }: any) => ({
    ...state,
    launchShipList
  })),
);

export function reducer(
  state: ShipState | undefined,
  action: Action
): ShipState {
  return shipReducer(state, action);
}

export function metaReducer(reducer: ShipState): ShipState {
  return reducer
}
