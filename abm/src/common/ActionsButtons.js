import React from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function ActionesButtons() {
  return (
    <div>
      <div>
        <IconButton aria-label="delete">
          <VisibilityIcon />
        </IconButton>

        <IconButton aria-label="delete">
          <EditIcon />
        </IconButton>

        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
}
