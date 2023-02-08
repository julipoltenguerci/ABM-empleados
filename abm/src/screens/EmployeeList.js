import React from "react";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  IconButton,
} from "@mui/material";
import { Delete, Visibility } from "@mui/icons-material";
import { removeEmployee } from "../actions/employeeActions";
import { PageTitle } from "../components/PageTitle";
//import ActionesButtons from "../components/ActionsButtons";

const columns = [
  { id: "employee_id", label: "ID", minWidth: 50, align: "center" },
  { id: "first_name", label: "Nombre", minWidth: 80, align: "center" },
  {
    id: "last_name",
    label: "Apellido",
    minWidth: 80,
    align: "center",
  },
  {
    id: "email",
    label: "E-mail",
    minWidth: 80,
    align: "center",
  },
  {
    id: "phone_number",
    label: "Teléfono",
    minWidth: 80,
    align: "center",
  },
  {
    id: "hire_date",
    label: "Fecha Contratación",
    minWidth: 80,
    align: "center",
  },
  {
    id: "salary",
    label: "salario",
    minWidth: 80,
    align: "center",
    format: (value) => `$${value}`,
  },
  {
    id: "commission_pct",
    label: "Comision",
    minWidth: 80,
    align: "center",
    format: (value) => `${value}%`,
  },
  {
    id: "actions",
    label: "Acciones",
    minWidth: 80,
    align: "center",
    component: (employee, viewAction, deleteAction) => (
      <>
        <IconButton aria-label="view" onClick={() => viewAction(employee)}>
          <Visibility />
        </IconButton>

        <IconButton aria-label="delete" onClick={() => deleteAction(employee)}>
          <Delete />
        </IconButton>
      </>
    ),
  },
];

export const EmployeeList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employees = useSelector((state) => state.employeesSlice.employees);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = useCallback((_, newPage) => setPage(newPage), []);

  const handleChangeRowsPerPage = useCallback((event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }, []);

  const handleViewAction = useCallback(
    (employee) => navigate(`/employee/${employee.employee_id}`),
    [navigate]
  );

  const handleDeleteAction = useCallback(
    (employee) => dispatch(removeEmployee(employee)),
    [dispatch]
  );

  return (
    <>
      <PageTitle>Gestor de Empleados - Vortex IT</PageTitle>
      <Paper sx={{ width: "100%" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ top: 57, minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {employees
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.employee_id}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];

                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.component
                            ? column.component(
                                row,
                                handleViewAction,
                                handleDeleteAction
                              )
                            : column.format
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={employees.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};
