import * as LaunchShipActions from './launch-ship.actions';

import { Action, createReducer, on } from '@ngrx/store';
import { ShipLaunch } from './launch-ship.model';

export const launchShipFeatureKey = 'ship';

export interface LaunchShipState {
  launchShipList: Array<ShipLaunch>;
}

export const initialState: LaunchShipState = {
  launchShipList: []
};

const launchShipReducer = createReducer(
  initialState,
  on(LaunchShipActions.GET_LAUNCH_SHIP_LIST, (state: any) => state),
  on(LaunchShipActions.GET_LAUNCH_SHIP_LIST_FAILURE, (state: any) => state),
  on(LaunchShipActions.GET_LAUNCH_SHIP_LIST_SUCCESS, (state: any, { launchShipList }: any) => ({
    ...state,
    launchShipList
  })),
);

export function reducer(
  state: LaunchShipState | undefined,
  action: Action
): LaunchShipState {
  return launchShipReducer(state, action);
}

export function metaReducer(reducer: LaunchShipState): LaunchShipState {
  return reducer
}
