import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { GET_UNMANNED_SHIP_LIST, DELETE_UNMANNED_SHIP, CREATE_UNMANNED_SHIP,UPDATE_UNMANNED_SHIP, GET_UNMANNED_SHIP_LIST_SUCCESS, GET_UNMANNED_SHIP_LIST_FAILURE, DELETE_UNMANNED_SHIP_SUCCESS, DELETE_UNMANNED_SHIP_FAILURE, CREATE_UNMANNED_SHIP_SUCCESS, CREATE_UNMANNED_SHIP_FAILURE, UPDATE_UNMANNED_SHIP_SUCCESS, UPDATE_UNMANNED_SHIP_FAILURE } from './unmanned-ship.actions';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';
import { ShipUnmanned } from './unmanned-ship.model';


@Injectable()
export class UnmannedShipEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  public getUnmannedShipList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GET_UNMANNED_SHIP_LIST),
      exhaustMap(({}) =>
        this.http
            .get('http://localhost:3000/unmanned-ship-list')
            .pipe(
              map(this.resolveGetUnmannedShipSuccess),
              catchError(this.resolveGetUnmannedShipFailure)
            )
      )
    )
  );

  public deleteUnmannedShip$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DELETE_UNMANNED_SHIP),
      exhaustMap(
        (props: { id: string }) =>
          this.http
              .delete(`http://localhost:3000/unmanned-ship/${ props.id }`)
              .pipe(
                mergeMap(this.resolveDeleteUnmannedShipSuccess),
                catchError(this.resolveDeleteUnmannedShipFailure)
              )
      )
    )
  );

  public createUnmanneShip$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CREATE_UNMANNED_SHIP),
      exhaustMap((props: { payload: ShipUnmanned}) =>
        this.http
            .post('http://localhost:3000/new-unmanned-ship', props.payload)
            .pipe(
              mergeMap(this.resolveCreateUnmannedShipSuccess),
              catchError(this.resolveCreateUnmannedShipFailure)
            )
      )
    )
  );

  public upateMannedShip$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UPDATE_UNMANNED_SHIP),
      exhaustMap((props: { payload: ShipUnmanned, id: string}) =>
        this.http
            .put(`http://localhost:3000/unmanned-ship/${ props.id }`, props.payload)
            .pipe(
              mergeMap(this.resolveUpdateUnmannedShipSuccess),
              catchError(this.resolveUpdateUnmannedShipFailure)
            )
      )
    )
  );

  private resolveGetUnmannedShipSuccess = (response: any): any => {
    return response
        ? GET_UNMANNED_SHIP_LIST_SUCCESS({ unMannedShipList: response })
        : GET_UNMANNED_SHIP_LIST_FAILURE();
  }

  private resolveGetUnmannedShipFailure = (): Observable<any> =>
    of(GET_UNMANNED_SHIP_LIST_FAILURE());

  private resolveDeleteUnmannedShipSuccess = (response: any): Array<any> => {
    return response
        ? [
            DELETE_UNMANNED_SHIP_SUCCESS({ message: response }),
            GET_UNMANNED_SHIP_LIST()
        ]
        : [DELETE_UNMANNED_SHIP_FAILURE()];
  }

  private resolveDeleteUnmannedShipFailure = (): Observable<any> =>
    of(DELETE_UNMANNED_SHIP_FAILURE());

  private resolveCreateUnmannedShipSuccess = (response: any): Array<any> => {
    return response
        ? [
            CREATE_UNMANNED_SHIP_SUCCESS({ unMannedShip: response }),
            GET_UNMANNED_SHIP_LIST()
        ]
        : [ CREATE_UNMANNED_SHIP_FAILURE()];
  }

  private resolveCreateUnmannedShipFailure = (): Observable<any> =>
    of(CREATE_UNMANNED_SHIP_FAILURE());

  private resolveUpdateUnmannedShipSuccess = (response: any): Array<any> => {
    return response
        ? [
            UPDATE_UNMANNED_SHIP_SUCCESS({ UnMannedShip: response}),
            GET_UNMANNED_SHIP_LIST()
        ]
        : [ UPDATE_UNMANNED_SHIP_FAILURE()];
  }

  private resolveUpdateUnmannedShipFailure = (): Observable<any> =>
    of(UPDATE_UNMANNED_SHIP_FAILURE());
}
