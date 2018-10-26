const prefix = "FILTER";

export const FilterActions = {
  SET_GENDER: `${prefix}_SET_GENDER`,
  SET_NATIONALITY: `${prefix}_SET_NATIONALITY`,
  SET_QUERY: `${prefix}_SET_QUERY`
};

export class FilterSetGender {
  type = FilterActions.SET_GENDER;
  constructor(public payload: "male" | "female") {}
}

export class FilterSetNationality {
  type = FilterActions.SET_NATIONALITY;
  constructor(public payload: string) {}
}

export class FilterSetQuery {
  type = FilterActions.SET_QUERY;
  constructor(public payload: string) {}
}
