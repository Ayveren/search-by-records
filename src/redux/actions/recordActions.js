import * as types from "./actionTypes";
import * as constants from '../../tools/constants';
import {search} from "../../tools/services";

export function loadRecordsSuccess(records){
  return { type: types.LOAD_RECORDS_SUCCESS, records };
}

export function editRecordSuccess(record){
  return { type: types.EDIT_RECORD_SUCCESS, record };
}

export function filterRecordsSuccess(records){
  return { type: types.FILTER_RECORDS_SUCCESS, records };
}

// I know it seems redundant but it should be
// some api call in real world with ERROR, SUCCESS or PENDING status,
// that's why I added this function, to handle
// future situations with following statuses
export function editRecord(record){
  return (dispatch) => dispatch(editRecordSuccess(record));
}

export function loadRecords(){
  return function (dispatch){
    return fakeApiCall
      .then(records => {
        dispatch(loadRecordsSuccess(records));
      })
      .catch(error => {
        throw error;
      });
  };
}

// I know it seems redundant but it should be
// some api call in real world with ERROR, SUCCESS or PENDING status,
// that's why I added this function, to handle
// future situations with following statuses

export function searchRecords(query, mode){
  return (dispatch, getState) => {
    // const { records } = getState();
    const filteredRecords = search(constants.initialTable, query, mode);
    !query && dispatch(filterRecordsSuccess(constants.initialTable));

    !!query && dispatch(filterRecordsSuccess(filteredRecords))
  };
}

const fakeApiCall = new Promise((res) => {
  setTimeout(() => res(constants.initialTable), 300);
});