import { ShipLaunch } from './ship.model';
import { createAction, props } from '@ngrx/store';

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
