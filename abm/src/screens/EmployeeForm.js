import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, TextField } from "@mui/material";
import { addEmployee, editEmployee } from "../actions/employeeActions";
import { PageTitle } from "../components/PageTitle";

export const EmployeeForm = () => {
  //HOOKS -------------------------
  const dispatch = useDispatch();

  const { employee_id } = useParams();

  const navigate = useNavigate();

  const employees = useSelector((state) => state.employeesSlice.employees);

  const [employee, setEmployee] = useState({
    employee_id: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    hire_date: "",
    salary: "",
    commission_pct: "",
  });

  const [isEditing, setIsEditing] = useState(true);

  const inputOnChange = useCallback(
    (key, value) =>
      setEmployee({
        ...employee,
        [key]: value,
      }),
    [employee]
  );

  //Functions -------------------------

  const handleSaveNewEmployee = useCallback(() => {
    dispatch(addEmployee(employee));
    // Cambiar alert por alguno de mui.
    alert("Empleado agregado exitosamente");
    // Mover este navigate al onClose del alert de mui.
    navigate("/");
  }, [dispatch, employee, navigate]);

  const handleEditEmployee = useCallback(() => {
    dispatch(editEmployee(employee));
    setIsEditing(false);
  }, [dispatch, employee]);

  const handleCancel = useCallback(() => {
    setEmployee(
      employees.find((employee) => employee.employee_id === employee_id)
    );
    setIsEditing(false);
  }, [employee_id, employees]);

  useEffect(() => {
    if (employee_id) {
      const employeeToEdit = employees.find(
        (employee) => employee.employee_id === employee_id
      );

      if (employeeToEdit) {
        setEmployee({ ...employeeToEdit });
        setIsEditing(false);
      }
    }
  }, [employee_id, employees]);

  return (
    <>
      <PageTitle>
        {employee_id ? "Ver Empleado" : "Agregar Nuevo Empleado"}
      </PageTitle>
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
              value={employee.first_name}
              disabled={!isEditing}
              onChange={(event) =>
                inputOnChange("first_name", event.target.value)
              }
            />
            <TextField
              id="outlined-textarea"
              label="Apellido"
              value={employee.last_name}
              disabled={!isEditing}
              onChange={(event) =>
                inputOnChange("last_name", event.target.value)
              }
            />
          </div>

          <div>
            <TextField
              id="outlined-multiline-flexible"
              label="E-mail"
              value={employee.email}
              disabled={!isEditing}
              onChange={(event) => inputOnChange("email", event.target.value)}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Teléfono"
              value={employee.phone_number}
              disabled={!isEditing}
              onChange={(event) =>
                inputOnChange("phone_number", event.target.value)
              }
            />
          </div>

          <div>
            <TextField
              id="outlined-multiline-flexible"
              label="Fecha Contratación"
              value={employee.hire_date}
              disabled={!isEditing}
              onChange={(event) =>
                inputOnChange("hire_date", event.target.value)
              }
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Salario Bruto"
              value={employee.salary}
              disabled={!isEditing}
              onChange={(event) => inputOnChange("salary", event.target.value)}
            />
          </div>
          <div>
            <TextField
              id="outlined-multiline-flexible"
              label="Comisión"
              value={employee.commission_pct}
              disabled={!isEditing}
              onChange={(event) =>
                inputOnChange("commission_pct", event.target.value)
              }
            />
          </div>
          <br />
          <br />
          {employee_id ? (
            isEditing ? (
              <>
                <Button onClick={handleEditEmployee}>Guardar Empleado</Button>
                <Button onClick={handleCancel}>Cancelar</Button>
              </>
            ) : (
              <Button onClick={() => setIsEditing(true)}>
                Editar Empleado
              </Button>
            )
          ) : (
            <Button onClick={handleSaveNewEmployee}>Agregar Empleado</Button>
          )}
        </Box>
      </Container>
    </>
  );
};
