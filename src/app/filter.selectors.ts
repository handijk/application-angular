import { State } from "./core/reducer-map";
import { createSelector } from "@ngrx/store";
import { FilterState } from "./filter.reducers";
import { AppSelectors } from "./core/selectors";

const getState = (state: State) => state.filter;

const gender = (state: FilterState) => state.gender;
const nationality = (state: FilterState) => state.nationality;
const query = (state: FilterState) => state.query;

export const FilterSelectors = {
  gender: createSelector(getState, gender),
  nationality: createSelector(getState, nationality),
  query: createSelector(getState, query)
};

// TODO: add a test for this method
export const filterItems = (
  data: Array<any>,
  gender: "male" | "female",
  nationality: string,
  query: string
) =>
  data
    ? data.filter(
        item =>
          (!nationality || item.nat === nationality) &&
          (!gender || item.gender === gender) &&
          (!query ||
            item.name.first.includes(query) ||
            item.name.last.includes(query))
      )
    : [];

// TODO: this could be a combineLatest observable too, but createSelector adds memoization
export const FilteredDataSelector = createSelector(
  AppSelectors.data,
  FilterSelectors.gender,
  FilterSelectors.nationality,
  FilterSelectors.query,
  filterItems
);
