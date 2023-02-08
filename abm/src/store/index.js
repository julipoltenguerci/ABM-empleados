import { combineReducers, legacy_createStore } from "redux";

import { employeeReducer } from "../reducers/EmployeeReducer";

const rootReducer = combineReducers({
  employeesSlice: employeeReducer,
});

export const store = legacy_createStore(rootReducer);
