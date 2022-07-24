import * as ShipActions from './ship.actions';
import * as ShipSelectors from './ship.selector';

import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';
import { ShipLaunch } from './ship.model';

@Injectable({
  providedIn: 'root'
})
export class ShipService {
  constructor(private store: Store) {}

  public getLaunchShipList(): void {
    this.store.dispatch(ShipActions.GET_LAUNCH_SHIP_LIST());
  }

  public getLaunchShipList$(): Observable<Array<ShipLaunch>> {
    return this.store.select(ShipSelectors.getLaunchShipList);
  }
}
