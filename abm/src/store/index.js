import { combineReducers, legacy_createStore } from "redux";
import EmployeeReducer from "../reducers/EmployeeReducer";

const rootReducer = combineReducers({
  employeesSlice: EmployeeReducer,
});

const store = legacy_createStore(rootReducer);

export default store;
