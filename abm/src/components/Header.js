import { AppBar, Toolbar, IconButton, Button, Box } from "@mui/material";
import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";
import img from "../assets/static/Logo_Vortex.png";

const NavBar = () => {
  // HOOKS
  const navigate = useNavigate();

  //FUNCTIONS
  const handleOnClickHome = () => {
    navigate("/");
  };

  const handleOnClickNew = () => {
    navigate("/add-employee");
  };

  const handleOnClickList = () => {
    navigate("/employees");
  };

  return (
    <Box>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton
            size="x-small"
            edge="start"
            color="inherit"
            aria-label="logo"
            component="div"
            onClick={handleOnClickHome}
            sx={{ flexGrow: 1 }}
          >
            <img src={img} alt="logo_vortex"></img>
          </IconButton>
          <Stack direction="row" spacing={2}>
            <Button onClick={handleOnClickNew} color="inherit">
              Nuevo Empleado
            </Button>
            <Button onClick={handleOnClickList} color="inherit">
              Nuestros Empleados
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;