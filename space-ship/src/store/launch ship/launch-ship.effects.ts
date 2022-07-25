import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { CREATE_LAUNCH_SHIP, CREATE_LAUNCH_SHIP_FAILURE, CREATE_LAUNCH_SHIP_SUCCESS, DELETE_LAUNCH_SHIP, DELETE_LAUNCH_SHIP_FAILURE, DELETE_LAUNCH_SHIP_SUCCESS, GET_LAUNCH_SHIP_LIST, GET_LAUNCH_SHIP_LIST_FAILURE, GET_LAUNCH_SHIP_LIST_SUCCESS, UPDATE_LAUNCH_SHIP, UPDATE_LAUNCH_SHIP_FAILURE, UPDATE_LAUNCH_SHIP_SUCCESS } from './launch-ship.actions';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';
import { ShipLaunch } from './launch-ship.model';


@Injectable()
export class LaunchShipEffects {
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

  public deleteLaunchShip$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DELETE_LAUNCH_SHIP),
      exhaustMap(
        (props: { id: string }) =>
          this.http
              .delete(`http://localhost:3000/ship-launch/${ props.id }`)
              .pipe(
                mergeMap(this.resolveDeleteLaunchShipSuccess),
                catchError(this.resolveDeleteLaunchShipFailure)
              )
      )
    )
  );

  public createLaunchShip$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CREATE_LAUNCH_SHIP),
      exhaustMap((props: { payload: ShipLaunch}) =>
        this.http
            .post('http://localhost:3000/new-ship-launch', props.payload)
            .pipe(
              mergeMap(this.resolveCreateLaunchShipSuccess),
              catchError(this.resolveCreateLaunchShipFailure)
            )
      )
    )
  );

  public upateLaunchShip$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UPDATE_LAUNCH_SHIP),
      exhaustMap((props: { payload: ShipLaunch, id: string}) =>
        this.http
            .put(`http://localhost:3000/ship-launch/${ props.id }`, props.payload)
            .pipe(
              mergeMap(this.resolveUpdateLaunchShipSuccess),
              catchError(this.resolveUpdateLaunchShipFailure)
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
    of(GET_LAUNCH_SHIP_LIST_FAILURE());

  private resolveDeleteLaunchShipSuccess = (response: any): Array<any> => {
    return response
        ? [
            DELETE_LAUNCH_SHIP_SUCCESS({ message: response }),
            GET_LAUNCH_SHIP_LIST()
        ]
        : [DELETE_LAUNCH_SHIP_FAILURE()];
  }

  private resolveDeleteLaunchShipFailure = (): Observable<any> =>
    of(DELETE_LAUNCH_SHIP_FAILURE());

  private resolveCreateLaunchShipSuccess = (response: any): Array<any> => {
    return response
        ? [
            CREATE_LAUNCH_SHIP_SUCCESS({ launchShip: response }),
            GET_LAUNCH_SHIP_LIST()
        ]
        : [ CREATE_LAUNCH_SHIP_FAILURE()];
  }

  private resolveCreateLaunchShipFailure = (): Observable<any> =>
    of(CREATE_LAUNCH_SHIP_FAILURE());

  private resolveUpdateLaunchShipSuccess = (response: any): Array<any> => {
    return response
        ? [
            UPDATE_LAUNCH_SHIP_SUCCESS({ launchShip: response }),
            GET_LAUNCH_SHIP_LIST()
        ]
        : [ UPDATE_LAUNCH_SHIP_FAILURE()];
  }

  private resolveUpdateLaunchShipFailure = (): Observable<any> =>
    of(UPDATE_LAUNCH_SHIP_FAILURE());
}
