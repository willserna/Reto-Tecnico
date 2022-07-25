import { createAction, props } from '@ngrx/store';
import { ShipManned } from './manned-ship.model';

// Actions for Manned Ship

export const GET_MANNED_SHIP_LIST = createAction(
  '[Manned ship] get Manned ship list'
);

export const GET_MANNED_SHIP_LIST_SUCCESS = createAction(
  '[Manned ship] get manned ship list success',
  props<{ mannedShipList: Array<ShipManned>}>()
);

export const GET_MANNED_SHIP_LIST_FAILURE = createAction(
  '[Manned ship] get manned ship list failure'
);

export const DELETE_MANNED_SHIP = createAction(
  '[Manned ship] delete manned ship list',
  props<{ id: string}>()
);

export const DELETE_MANNED_SHIP_SUCCESS = createAction(
  '[Manned ship] delete manned ship list success',
  props<{ message: string}>()
);

export const DELETE_MANNED_SHIP_FAILURE = createAction(
  '[Manned ship] delete manned ship list failure'
);

export const CREATE_MANNED_SHIP = createAction(
  '[Manned ship] create manned ship list',
  props<{ payload: ShipManned }>()
);

export const CREATE_MANNED_SHIP_SUCCESS = createAction(
  '[Manned ship] create manned ship list success',
  props<{ mannedShip: ShipManned }>()
);

export const CREATE_MANNED_SHIP_FAILURE = createAction(
  '[Manned ship] create manned ship list failure'
);

export const UPDATE_MANNED_SHIP = createAction(
  '[Manned ship] update manned ship list',
  props<{ payload: ShipManned, id: string }>()
);

export const UPDATE_MANNED_SHIP_SUCCESS = createAction(
  '[Manned ship] update manned ship list success',
  props<{ mannedShip: ShipManned }>()
);

export const UPDATE_MANNED_SHIP_FAILURE = createAction(
  '[Manned ship] update manned ship list failure'
);
