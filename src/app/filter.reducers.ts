import { FilterActions } from "./filter.actions";

// TODO: restrict type for nationality to all possible nationalities
export interface FilterState {
  gender?: "male" | "female";
  nationality?: string;
  query?: string;
}

export const filterReducers = (
  state: FilterState = {},
  action: any
): FilterState => {
  switch (action.type) {
    case FilterActions.SET_GENDER: {
      return {
        ...state,
        gender: action.payload
      };
    }
    case FilterActions.SET_NATIONALITY: {
      return {
        ...state,
        nationality: action.payload
      };
    }
    case FilterActions.SET_QUERY: {
      return {
        ...state,
        query: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
