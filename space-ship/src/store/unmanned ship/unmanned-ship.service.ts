import * as UnMannedShipActions from './unmanned-ship.actions';
import * as UnMannedShipSelectors from './unmanned-ship.selector';

import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';
import { ShipUnmanned } from './unmanned-ship.model';

@Injectable({
  providedIn: 'root'
})
export class UnmannedShipService {
  constructor(private store: Store) {}

  public getUnmannedShipList(): void {
    this.store.dispatch(UnMannedShipActions.GET_UNMANNED_SHIP_LIST());
  }

  public getUnmannedShipList$(): Observable<Array<ShipUnmanned>> {
    return this.store.select(UnMannedShipSelectors.getUnmannedShipList);
  }

  public deleteUnmannedShip(id: string): void {
    this.store.dispatch(UnMannedShipActions.DELETE_UNMANNED_SHIP({ id }));
  }

  public createUnmannedShip(payload: ShipUnmanned): void {
    this.store.dispatch(UnMannedShipActions.CREATE_UNMANNED_SHIP({ payload }));
  }

  public updateUnmannedShip(payload: ShipUnmanned, id: string): void {
    this.store.dispatch(UnMannedShipActions.UPDATE_UNMANNED_SHIP({ payload, id }));
  }
}
