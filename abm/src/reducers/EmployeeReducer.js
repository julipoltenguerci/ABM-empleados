import * as actions from "../actions/ActionsType";

export const initialState = {
  employees: [],
};

const EmployeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    default:
      return state;
  }
};

export default EmployeeReducer;
