import { Actions, Effect } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { AppActions } from "./actions";
import { catchError, switchMap, map } from "rxjs/operators";
import { Observable, of } from "rxjs/index";
import { debounceTime } from "rxjs/internal/operators";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AppEffects {
  constructor(private actions: Actions, private http: HttpClient) {}

  @Effect()
  public fetchData: Observable<any> = this.actions
    .ofType(AppActions.DATA_FETCH)
    .pipe(
      debounceTime(1000),
      switchMap(() =>
        this.http.get("https://randomuser.me/api/?results=500").pipe(
          map(data => ({
            type: AppActions.DATA_FETCH_SUCCESS,
            payload: data["results"]
          }))
        )
      ),
      catchError(
        error => console.log(error) || of({ type: AppActions.DATA_FETCH_ERROR })
      )
    );
}
