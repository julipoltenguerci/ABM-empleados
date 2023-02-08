import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import ActionesButtons from "../common/ActionsButtons";

const columns = [
  { id: "id", label: "ID", minWidth: 50, align: "center" },
  { id: "name", label: "Nombre", minWidth: 80, align: "center" },

  {
    id: "lastname",
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
    id: "phoneNumber",
    label: "Teléfono",
    minWidth: 80,
    align: "center",
  },
  {
    id: "fechaContratacion",
    label: "Fecha Contratación",
    minWidth: 80,
    align: "center",
  },
  {
    id: "salario",
    label: "Salario",
    minWidth: 80,
    align: "center",
  },
  {
    id: "comision",
    label: "Comision",
    minWidth: 80,
    align: "center",
  },
  {
    id: "actions",
    label: "Acciones",
    minWidth: 80,
    align: "center",
  },
];

function createData(
  id,
  name,
  lastname,
  email,
  phoneNumber,
  fechaContratacion,
  salario,
  comision
) {
  return {
    id,
    name,
    lastname,
    email,
    phoneNumber,
    fechaContratacion,
    salario,
    comision,
  };
}

const rows = [
  //primera row no se visualiza, corregir
  createData(
    0,
    "Juan",
    "Perez",
    "hhh@hhh",
    "3519998887",
    "01/01/2022",
    2000,
    20
  ),
  createData(
    1,
    "Juan",
    "Perez",
    "hhh@hhh",
    "3519998887",
    "01/01/2022",
    170000,
    10
  ),
  createData(
    2,
    "Pepe",
    "Lopez",
    "hhh@hhh",
    "3512288222",
    "01/01/2022",
    400000,
    0
  ),
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "center",
  fontSize: 20,
  color: theme.palette.text.secondary,
}));

export default function EmployeeList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stack spacing={2}>
          <Item>Gestor de Empleados - Vortex IT</Item>
        </Stack>
      </Box>
      <Paper sx={{ width: "100%" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
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
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 25, 50, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
