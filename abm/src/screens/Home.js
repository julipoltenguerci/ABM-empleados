import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/add-employee");
  };
  return (
    <>
      <div>
        <Button
          variant="outlined"
          onClick={handleOnClick}
          href="#outlined-buttons"
        >
          Agregar nuevo empleado
        </Button>
      </div>
    </>
  );
};
//<button onClick={handleOnClick}>Agregar nuevo empleado</button>

export default Home;
