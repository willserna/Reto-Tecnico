import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { GET_MANNED_SHIP_LIST, DELETE_MANNED_SHIP, CREATE_MANNED_SHIP,UPDATE_MANNED_SHIP, GET_MANNED_SHIP_LIST_SUCCESS, GET_MANNED_SHIP_LIST_FAILURE, DELETE_MANNED_SHIP_SUCCESS, DELETE_MANNED_SHIP_FAILURE, CREATE_MANNED_SHIP_SUCCESS, CREATE_MANNED_SHIP_FAILURE, UPDATE_MANNED_SHIP_SUCCESS, UPDATE_MANNED_SHIP_FAILURE } from './manned-ship.actions';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';
import { ShipManned } from './manned-ship.model';


@Injectable()
export class MannedShipEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  public getMannedShipList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GET_MANNED_SHIP_LIST),
      exhaustMap(({}) =>
        this.http
            .get('http://localhost:3000/manned-ship-list')
            .pipe(
              map(this.resolveGetMannedShipSuccess),
              catchError(this.resolveGetMannedShipFailure)
            )
      )
    )
  );

  public deleteMannedShip$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DELETE_MANNED_SHIP),
      exhaustMap(
        (props: { id: string }) =>
          this.http
              .delete(`http://localhost:3000/manned-ship/${ props.id }`)
              .pipe(
                mergeMap(this.resolveDeleteMannedShipSuccess),
                catchError(this.resolveDeleteMannedShipFailure)
              )
      )
    )
  );

  public createMannedShip$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CREATE_MANNED_SHIP),
      exhaustMap((props: { payload: ShipManned}) =>
        this.http
            .post('http://localhost:3000/new-manned-ship', props.payload)
            .pipe(
              mergeMap(this.resolveCreateMannedShipSuccess),
              catchError(this.resolveCreateMannedShipFailure)
            )
      )
    )
  );

  public upateMannedShip$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UPDATE_MANNED_SHIP),
      exhaustMap((props: { payload: ShipManned, id: string}) =>
        this.http
            .put(`http://localhost:3000/manned-ship/${ props.id }`, props.payload)
            .pipe(
              mergeMap(this.resolveUpdateMannedShipSuccess),
              catchError(this.resolveUpdateMannedShipFailure)
            )
      )
    )
  );

  private resolveGetMannedShipSuccess = (response: any): any => {
    return response
        ? GET_MANNED_SHIP_LIST_SUCCESS({ mannedShipList: response })
        : GET_MANNED_SHIP_LIST_FAILURE();
  }

  private resolveGetMannedShipFailure = (): Observable<any> =>
    of(GET_MANNED_SHIP_LIST_FAILURE());

  private resolveDeleteMannedShipSuccess = (response: any): Array<any> => {
    return response
        ? [
            DELETE_MANNED_SHIP_SUCCESS({ message: response }),
            GET_MANNED_SHIP_LIST()
        ]
        : [DELETE_MANNED_SHIP_FAILURE()];
  }

  private resolveDeleteMannedShipFailure = (): Observable<any> =>
    of(DELETE_MANNED_SHIP_FAILURE());

  private resolveCreateMannedShipSuccess = (response: any): Array<any> => {
    return response
        ? [
            CREATE_MANNED_SHIP_SUCCESS({ mannedShip: response }),
            GET_MANNED_SHIP_LIST()
        ]
        : [ CREATE_MANNED_SHIP_FAILURE()];
  }

  private resolveCreateMannedShipFailure = (): Observable<any> =>
    of(CREATE_MANNED_SHIP_FAILURE());

  private resolveUpdateMannedShipSuccess = (response: any): Array<any> => {
    return response
        ? [
            UPDATE_MANNED_SHIP_SUCCESS({ mannedShip: response }),
            GET_MANNED_SHIP_LIST()
        ]
        : [ UPDATE_MANNED_SHIP_FAILURE()];
  }

  private resolveUpdateMannedShipFailure = (): Observable<any> =>
    of(UPDATE_MANNED_SHIP_FAILURE());
}
