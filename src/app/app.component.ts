import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/index";
import { AppSelectors } from "./core/selectors";
import { AppActions } from "./core/actions";
import {
  FilterSetGender,
  FilterSetNationality,
  FilterSetQuery
} from "./filter.actions";
import { State } from "./core/reducer-map";
import { FilteredDataSelector, FilterSelectors } from "./filter.selectors";

// TODO: seperate the filter logic from the list view by creating a seperate filter component
// TODO: move filter.actions, filter.reducers and filter.selectors to the seperate filter component

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  loading: Observable<boolean> = this.store.select(AppSelectors.loading);
  data: Observable<Array<any>> = this.store.select(FilteredDataSelector);
  // TODO: move the properties below to a seperate filter component
  gender: Observable<"male" | "female"> = this.store.select(
    FilterSelectors.gender
  );
  nationality: Observable<string> = this.store.select(
    FilterSelectors.nationality
  );
  query: Observable<string> = this.store.select(FilterSelectors.query);

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store.dispatch({ type: AppActions.DATA_FETCH });
  }

  // TODO: move the methods below to a seperate filter component
  setGender(gender: "male" | "female") {
    this.store.dispatch(new FilterSetGender(gender));
  }

  setNationality(nationality: string) {
    this.store.dispatch(new FilterSetNationality(nationality));
  }

  setQuery(query: string) {
    this.store.dispatch(new FilterSetQuery(query));
  }
}
