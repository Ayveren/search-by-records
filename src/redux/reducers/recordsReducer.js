import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function recordsReducer(state = initialState.records, action){
  switch (action.type) {
    case types.LOAD_RECORDS_SUCCESS:
      return action.records;
    case types.FILTER_RECORDS_SUCCESS:
      return action.records;
    case types.EDIT_RECORD_SUCCESS:
      return state.map(record => {
          return record.name === action.record.name ? action.record : record
        }
      );
    default:
      return state;
  }
}