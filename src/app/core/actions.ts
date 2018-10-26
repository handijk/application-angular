const prefix = "APP";

// TODO: add classes for actions to ensure type safety, same as filter actions

export const AppActions = {
  LOADING_START: `${prefix}_LOADING_START`,
  LOADING_STOP: `${prefix}_LOADING_STOP`,
  DATA_FETCH: `${prefix}_FETCH_DATA`,
  DATA_FETCH_SUCCESS: `${prefix}_DATA_FETCH_SUCCESS`,
  DATA_FETCH_ERROR: `${prefix}_DATA_FETCH_ERROR`
};
