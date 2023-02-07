import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addEmployee } from "../actions/EmployeeActions";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "center",
  fontSize: 20,
  color: theme.palette.text.secondary,
}));

const EmployeeForm = () => {
  // HOOKS ----------
  const employees = useSelector((state) => state.employeesSlice.employees);

  const [employee, setEmployee] = useState({
    employee_id: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: null,
    hire_date: "",
    salary: null,
    commission_pct: null,
  });

  const dispatch = useDispatch();

  const inputOnChange = (event) => setEmployee(event.target.value);

  const buttonOnClick = () => {
    dispatch(addEmployee(employee));
    setEmployee("");
  };

  return (
    <>
      <CssBaseline />
      <Box sx={{ width: "100%" }}>
        <Stack spacing={2}>
          <Item>Agregar Nuevo Empleado</Item>
        </Stack>
      </Box>
      <Container
        sx={{ maxWidth: "sm", bgcolor: "#b0bec5", height: "75vh", mt: 4 }}
      >
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": {
              m: 3,
              width: "40ch",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="outlined-multiline-flexible"
              label="Nombre"
              multiline
              maxRows={4}
              //value={employee.first_name}
              onChange={inputOnChange}
              onSubmit={inputOnChange}
            />
            <TextField
              id="outlined-textarea"
              label="Apellido"
              multiline
              maxRows={4}
              //value={employee.last_name}
              onChange={inputOnChange}
              onSubmit={inputOnChange}
            />
          </div>

          <div>
            <TextField
              id="outlined-multiline-flexible"
              label="E-mail"
              multiline
              maxRows={4}
              //value={employee.email}
              onChange={inputOnChange}
              onSubmit={inputOnChange}
            />
            <TextField id="outlined-textarea" label="Teléfono" multiline />
          </div>

          <div>
            <TextField
              id="outlined-multiline-flexible"
              label="Fecha Contratación"
              type="date"
              multiline
              maxRows={4}
            />
            <TextField id="outlined-textarea" label="Salario Bruto" multiline />
          </div>
          <div>
            <TextField
              id="outlined-multiline-flexible"
              label="Comisión"
              multiline
              maxRows={4}
            />
          </div>
          <div>
            <Button onClick={buttonOnClick}>Agregar Empleado</Button>
            <br />

            <div>
              {employees.map((employee, index) => (
                <div key={index}>{employee}</div>
              ))}
            </div>
          </div>
        </Box>
      </Container>
    </>
  );
};

export default EmployeeForm;
