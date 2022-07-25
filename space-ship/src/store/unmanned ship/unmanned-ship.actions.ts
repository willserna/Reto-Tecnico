import { createAction, props } from '@ngrx/store';
import { ShipUnmanned } from './unmanned-ship.model';

// Actions for Unmanned Ship

export const GET_UNMANNED_SHIP_LIST = createAction(
  '[Unmanned ship] get Unmanned ship list'
);

export const GET_UNMANNED_SHIP_LIST_SUCCESS = createAction(
  '[Unmanned ship] get Unmanned ship list success',
  props<{ unMannedShipList: Array<ShipUnmanned>}>()
);

export const GET_UNMANNED_SHIP_LIST_FAILURE = createAction(
  '[Unmanned ship] get Unmanned ship list failure'
);

export const DELETE_UNMANNED_SHIP = createAction(
  '[Unmanned ship] delete Unmanned ship list',
  props<{ id: string}>()
);

export const DELETE_UNMANNED_SHIP_SUCCESS = createAction(
  '[Unmanned ship] delete Unmanned ship list success',
  props<{ message: string}>()
);

export const DELETE_UNMANNED_SHIP_FAILURE = createAction(
  '[Unmanned ship] delete Unmanned ship list failure'
);

export const CREATE_UNMANNED_SHIP = createAction(
  '[Unmanned ship] create Unmanned ship list',
  props<{ payload: ShipUnmanned }>()
);

export const CREATE_UNMANNED_SHIP_SUCCESS = createAction(
  '[Unmanned ship] create Unmanned ship list success',
  props<{ unMannedShip: ShipUnmanned }>()
);

export const CREATE_UNMANNED_SHIP_FAILURE = createAction(
  '[Unmanned ship] create Unmanned ship list failure'
);

export const UPDATE_UNMANNED_SHIP = createAction(
  '[Unmanned ship] update Unmanned ship list',
  props<{ payload: ShipUnmanned, id: string }>()
);

export const UPDATE_UNMANNED_SHIP_SUCCESS = createAction(
  '[Unmanned ship] update Unmanned ship list success',
  props<{ UnMannedShip: ShipUnmanned }>()
);

export const UPDATE_UNMANNED_SHIP_FAILURE = createAction(
  '[Unmanned ship] update Unmanned ship list failure'
);
