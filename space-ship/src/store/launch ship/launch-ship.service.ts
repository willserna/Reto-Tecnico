import * as LaunchShipActions from './launch-ship.actions';
import * as LaunchShipSelectors from './launch-ship.selector';

import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';
import { ShipLaunch } from './launch-ship.model';

@Injectable({
  providedIn: 'root'
})
export class LaunchShipService {
  constructor(private store: Store) {}

  public getLaunchShipList(): void {
    this.store.dispatch(LaunchShipActions.GET_LAUNCH_SHIP_LIST());
  }

  public getLaunchShipList$(): Observable<Array<ShipLaunch>> {
    return this.store.select(LaunchShipSelectors.getLaunchShipList);
  }

  public deleteLaunchShip(id: string): void {
    this.store.dispatch(LaunchShipActions.DELETE_LAUNCH_SHIP({ id }));
  }

  public createLaunchShip(payload: ShipLaunch): void {
    this.store.dispatch(LaunchShipActions.CREATE_LAUNCH_SHIP({ payload }));
  }

  public updateLaunchShip(payload: ShipLaunch, id: string): void {
    this.store.dispatch(LaunchShipActions.UPDATE_LAUNCH_SHIP({ payload, id }));
  }
}
