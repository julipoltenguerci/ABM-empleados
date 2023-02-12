import {
  ADD_EMPLOYEE,
  EDIT_EMPLOYEE,
  REMOVE_EMPLOYEE,
} from "../actions/employeeActions";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  employees: [
    {
      employee_id: "4e451e26-9328-4df5-9f64-5689c3762da3",
      first_name: "Dolores",
      last_name: "Pizarro Caballero",
      email: "dolores.pizarro@vortex-it.com",
      phone_number: 35125599221,
      hire_date: "2020-04-10",
      salary: 220000,
      commission_pct: 0,
    },
    {
      employee_id: "882ab9a0-d735-485a-9d16-e1ad47b7a0e2",
      first_name: "Luciano",
      last_name: "Soria",
      email: "luciano.soria@vortex-it.com",
      phone_number: 3512223337,
      hire_date: "2021-01-01",
      salary: 215000,
      commission_pct: 0,
    },
    {
      employee_id: "eeabdc27-fe22-4a3c-800f-aba160c07e40",
      first_name: "Miguel Angel",
      last_name: "Medina",
      email: "miguel.medina@vortex-it.com",
      phone_number: 3514445555,
      hire_date: "2021-09-01",
      salary: 190000,
      commission_pct: 0,
    },
  ],
};

export const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return {
        ...state,
        employees: [
          ...state.employees,
          {
            ...action.payload,
            employee_id: uuidv4(),
          },
        ],
      };
    case EDIT_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.map((employee) =>
          action.payload.employee_id === employee.employee_id
            ? action.payload
            : employee
        ),
      };
    case REMOVE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => action.payload.employee_id !== employee.employee_id
        ),
      };
    default:
      return state;
  }
};
