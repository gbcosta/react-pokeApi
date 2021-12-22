import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

interface TablePokemonProps {
  name: any;
  rows: any;
}

const TablePokemon: React.FC<TablePokemonProps> = (props) => {
  return (
    <Box mt={"1rem"} display={"flex"} >
      <TableContainer component={Paper}>
        <Table
          sx={{ width: 600, backgroundColor: "#4b4b4b", color: "#fff" }}
          size="small"
        >
          <TableHead sx={{ backgroundColor: "#1b1b1b", color: "#fff" }}>
            <TableRow>{props.name}</TableRow>
          </TableHead>
          <TableBody>{props.rows}</TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TablePokemon;
