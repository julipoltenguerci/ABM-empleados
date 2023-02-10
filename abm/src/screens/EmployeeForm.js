import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { addEmployee, editEmployee } from "../actions/employeeActions";
import { Dialog } from "../components/Dialog";
import { PageTitle } from "../components/PageTitle";
import { Box, Button, Container, TextField } from "@mui/material";

const getEmptyEmployee = () => ({
  employee_id: "",
  first_name: "",
  last_name: "",
  email: "",
  phone_number: "",
  hire_date: "",
  salary: "",
  commission_pct: "",
});

export const EmployeeForm = () => {
  // --------- HOOKS ---------
  const dispatch = useDispatch();
  const { employee_id } = useParams();
  const navigate = useNavigate();
  const employees = useSelector((state) => state.employeesSlice.employees);
  const [employee, setEmployee] = useState(getEmptyEmployee());

  const [isEditing, setIsEditing] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    if (employee_id) {
      const employeeToEdit = employees.find(
        (employee) => employee.employee_id === employee_id
      );

      if (employeeToEdit) {
        setEmployee({ ...employeeToEdit });
        setIsEditing(false);
      }
    } else {
      setEmployee(getEmptyEmployee());
      setIsEditing(true);
    }
  }, [employee_id, employees]);

  // --------- FUNCTIONS ---------
  const inputOnChange = useCallback(
    (key, value) =>
      setEmployee({
        ...employee,
        [key]: value,
      }),
    [employee]
  );

  const handleAddNewEmployee = useCallback(() => {
    dispatch(addEmployee(employee));
    setIsDialogOpen(true);
  }, [dispatch, employee]);

  const handleEditEmployee = useCallback(() => {
    dispatch(editEmployee(employee));
    setIsDialogOpen(true);
  }, [dispatch, employee]);

  const handleCancel = useCallback(() => {
    setEmployee(
      employees.find((employee) => employee.employee_id === employee_id)
    );
    setIsEditing(false);
  }, [employee_id, employees]);

  const handleCloseDialog = useCallback(() => {
    setIsDialogOpen(false);

    if (employee_id) {
      setIsEditing(false);
    } else {
      navigate("/");
    }
  }, [employee_id, navigate]);

  return (
    <>
      <PageTitle>
        {employee_id
          ? `ID del Empleado/a: ${employee.employee_id}`
          : "Agregar Nuevo Empleado"}
      </PageTitle>
      <Container
        sx={{
          maxWidth: "sm",
          bgcolor: "#f5f5f5",
          mt: 4,
          padding: "24px",
        }}
      >
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            "& .MuiTextField-root": {
              flex: 1,
            },
          }}
          autoComplete="off"
        >
          <div style={{ display: "flex", gap: "24px" }}>
            <TextField
              required
              label="Nombre"
              value={employee.first_name}
              disabled={!isEditing}
              onChange={(event) =>
                inputOnChange("first_name", event.target.value)
              }
            />
            <TextField
              required
              label="Apellido"
              value={employee.last_name}
              disabled={!isEditing}
              onChange={(event) =>
                inputOnChange("last_name", event.target.value)
              }
            />
          </div>
          <div style={{ display: "flex", gap: "24px" }}>
            <TextField
              required
              label="E-mail"
              type="email"
              value={employee.email}
              disabled={!isEditing}
              onChange={(event) => inputOnChange("email", event.target.value)}
            />
            <TextField
              required
              label="Teléfono"
              type="number"
              value={employee.phone_number}
              disabled={!isEditing}
              onChange={(event) =>
                inputOnChange("phone_number", event.target.value)
              }
            />
          </div>
          <div style={{ display: "flex", gap: "24px" }}>
            <TextField
              required
              label="Fecha Contratación"
              type="date"
              value={employee.hire_date}
              disabled={!isEditing}
              onChange={(event) =>
                inputOnChange("hire_date", event.target.value)
              }
              InputLabelProps={{ shrink: true }} //con esta prop label queda outline
            />
            <TextField
              required
              label="Salario Bruto"
              type="number"
              value={employee.salary}
              disabled={!isEditing}
              onChange={(event) => inputOnChange("salary", event.target.value)}
            />
          </div>
          <div style={{ display: "flex", gap: "24px" }}>
            <TextField
              required
              label="Comisión"
              type="number"
              value={employee.commission_pct}
              disabled={!isEditing}
              onChange={(event) =>
                inputOnChange("commission_pct", event.target.value)
              }
            />
          </div>

          <div style={{ display: "flex", gap: "24px" }}>
            {employee_id ? (
              isEditing ? (
                <>
                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={handleEditEmployee}
                  >
                    Guardar Empleado
                  </Button>
                  <Button
                    color="info"
                    variant="contained"
                    onClick={handleCancel}
                  >
                    Cancelar
                  </Button>
                </>
              ) : (
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => setIsEditing(true)}
                >
                  Editar Empleado
                </Button>
              )
            ) : (
              <Button
                color="secondary"
                variant="contained"
                onClick={handleAddNewEmployee}
              >
                Agregar Empleado
              </Button>
            )}
          </div>
        </Box>
      </Container>
      <Dialog
        isOpen={isDialogOpen}
        title={
          employee_id
            ? "¡Se ha editado correctamente el empleado!"
            : "¡Se ha guardado correctamente el empleado!"
        }
        closeLabel="Aceptar"
        onClose={handleCloseDialog}
      ></Dialog>
    </>
  );
};
