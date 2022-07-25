import * as MannedShipActions from './manned-ship.actions';
import * as MannedShipSelectors from './manned-ship.selector';

import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';
import { ShipManned } from './manned-ship.model';

@Injectable({
  providedIn: 'root'
})
export class MannedShipService {
  constructor(private store: Store) {}

  public getMannedShipList(): void {
    this.store.dispatch(MannedShipActions.GET_MANNED_SHIP_LIST());
  }

  public getMannedShipList$(): Observable<Array<ShipManned>> {
    return this.store.select(MannedShipSelectors.getMannedShipList);
  }

  public deleteMannedShip(id: string): void {
    this.store.dispatch(MannedShipActions.DELETE_MANNED_SHIP({ id }));
  }

  public createMannedShip(payload: ShipManned): void {
    this.store.dispatch(MannedShipActions.CREATE_MANNED_SHIP({ payload }));
  }

  public updateMannedShip(payload: ShipManned, id: string): void {
    this.store.dispatch(MannedShipActions.UPDATE_MANNED_SHIP({ payload, id }));
  }
}
