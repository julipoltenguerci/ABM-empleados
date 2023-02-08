export const ADD_EMPLOYEE = "ADD_EMPLOYEE";
export const EDIT_EMPLOYEE = "EDIT_EMPLOYEE";
export const REMOVE_EMPLOYEE = "REMOVE_EMPLOYEE";
/* const employees = [{
  employee_id: 1,
  first_name: "Julieta",
  last_name: "Polten Guerci",
  email: "julieta.polten@vortex-it.com",
  phone_number: 3512436997,
  hire_date: "01/02/2023",
  salary: 170000,
  commission_pct: 0,
},
{
  employee_id: 2,
  first_name: "Luciano",
  last_name: "Soria",
  email: "luciano.soria@vortex-it.com",
  phone_number: 351222333,
  hire_date: "01/04/2021",
  salary: 215000,
  commission_pct: 0,
},
{
  employee_id: 3,
  first_name: "Migue Angel",
  last_name: "Medina",
  email: "miguel.medina@vortex-it.com",
  phone_number: 3514445555,
  hire_date: "01/07/2022",
  salary: 190000,
  commission_pct: 0,
},] */

// ACTIONS CREATORS --------

export const addEmployee = (payload) => ({
  type: ADD_EMPLOYEE,
  payload,
});

export const editEmployee = (payload) => ({
  type: EDIT_EMPLOYEE,
  payload,
});

export const removeEmployee = (payload) => ({
  type: REMOVE_EMPLOYEE,
  payload,
});
