import { ShipLaunch } from './launch-ship.model';
import { createAction, props } from '@ngrx/store';

// Actions for launch ship

export const GET_LAUNCH_SHIP_LIST = createAction(
  '[Launch ship] get launch ship list'
);

export const GET_LAUNCH_SHIP_LIST_SUCCESS = createAction(
  '[Launch ship] get launch ship list success',
  props<{ launchShipList: Array<ShipLaunch>}>()
);

export const GET_LAUNCH_SHIP_LIST_FAILURE = createAction(
  '[Launch ship] get launch ship list failure'
);

export const DELETE_LAUNCH_SHIP = createAction(
  '[Launch ship] delete launch ship list',
  props<{ id: string}>()
);

export const DELETE_LAUNCH_SHIP_SUCCESS = createAction(
  '[Launch ship] delete launch ship list success',
  props<{ message: string}>()
);

export const DELETE_LAUNCH_SHIP_FAILURE = createAction(
  '[Launch ship] delete launch ship list failure'
);

export const CREATE_LAUNCH_SHIP = createAction(
  '[Launch ship] create launch ship list',
  props<{ payload: ShipLaunch }>()
);

export const CREATE_LAUNCH_SHIP_SUCCESS = createAction(
  '[Launch ship] create launch ship list success',
  props<{ launchShip: ShipLaunch }>()
);

export const CREATE_LAUNCH_SHIP_FAILURE = createAction(
  '[Launch ship] create launch ship list failure'
);

export const UPDATE_LAUNCH_SHIP = createAction(
  '[Launch ship] update launch ship list',
  props<{ payload: ShipLaunch, id: string }>()
);

export const UPDATE_LAUNCH_SHIP_SUCCESS = createAction(
  '[Launch ship] update launch ship list success',
  props<{ launchShip: ShipLaunch }>()
);

export const UPDATE_LAUNCH_SHIP_FAILURE = createAction(
  '[Launch ship] update launch ship list failure'
);
