import React from "react";
import { Button } from "@mui/material";

interface ButtonPaginationProps {
  children: any;
  onClick: () => void;
}

const ButtonPagination: React.FC<ButtonPaginationProps> = (props) => {
  return (
    <Button
      variant="contained"
      sx={{
        transition: "all 0.6s ease",
        backgroundColor: "#303030",
        margin: { xs: "0.5rem", sm: "2rem", md: "2rem" },
        ":hover": { background: "#d1d1d1", color: "black" },
        width: { xs: "2px" },
      }}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};

export default ButtonPagination;
