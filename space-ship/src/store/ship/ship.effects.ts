import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { GET_LAUNCH_SHIP_LIST, GET_LAUNCH_SHIP_LIST_FAILURE, GET_LAUNCH_SHIP_LIST_SUCCESS } from './ship.actions';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { ShipLaunch } from './ship.model';

@Injectable()
export class ShipEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  public getLaunchShipList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GET_LAUNCH_SHIP_LIST),
      exhaustMap(({}) =>
        this.http
            .get('http://localhost:3000/ship-launch-list')
            .pipe(
              map(this.resolveGetLaunchShipSuccess),
              catchError(this.resolveGetLaunchShipFailure)
            )
      )
    )
  );

  private resolveGetLaunchShipSuccess = (response: any): any => {
    return response
        ? GET_LAUNCH_SHIP_LIST_SUCCESS({ launchShipList: response })
        : GET_LAUNCH_SHIP_LIST_FAILURE();
  }

  private resolveGetLaunchShipFailure = (): Observable<any> =>
    of(GET_LAUNCH_SHIP_LIST_FAILURE())
}
