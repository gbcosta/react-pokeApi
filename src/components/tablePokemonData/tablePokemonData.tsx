import React from "react";

import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Ability, Move, Stat } from "../../interfaces/pokemon";
import TablePokemon from "../tablePokemon/tablePokemon";
import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  color: "#dbdbdb",
}));

interface TablePokemonDataProps {
  movesArray?: Move[] | undefined;
  abilitiesArray?: Ability[] | undefined;
  statsArray?: Stat[] | undefined;
}

const capitalize = (s: string) => {
  return s && s[0].toUpperCase() + s.slice(1);
};

const TableAbilities: React.FC<TablePokemonDataProps> = (props) => {
  const dataRows = props.abilitiesArray?.map((ability) => {
    return (
      <TableRow key={ability.ability.name}>
        <StyledTableCell>{capitalize(ability.ability.name)}</StyledTableCell>
      </TableRow>
    );
  });

  const headerColumns = (
    <>
      <StyledTableCell>Abilities</StyledTableCell>
    </>
  );

  return <TablePokemon name={headerColumns} rows={dataRows} />;
};

const TableMoves: React.FC<TablePokemonDataProps> = (props) => {
  const dataRows = props.movesArray?.map((move) => {
    return (
      <TableRow key={move.move.name}>
        <StyledTableCell>{capitalize(move.move.name)}</StyledTableCell>
        <StyledTableCell>
          {move.version_group_details[0].level_learned_at}
        </StyledTableCell>
        <StyledTableCell>
          {capitalize(move.version_group_details[0].move_learn_method.name)}
        </StyledTableCell>
      </TableRow>
    );
  });

  const headerColumns = (
    <>
      <StyledTableCell>Move</StyledTableCell>
      <StyledTableCell>level learned</StyledTableCell>
      <StyledTableCell>method</StyledTableCell>
    </>
  );

  return <TablePokemon name={headerColumns} rows={dataRows} />;
};

const TableStats: React.FC<TablePokemonDataProps> = (props) => {
  const headerColumns = (
    <>
      <StyledTableCell>HP</StyledTableCell>
      <StyledTableCell>ATK</StyledTableCell>
      <StyledTableCell>DEF</StyledTableCell>
      <StyledTableCell>SPECIAL ATK</StyledTableCell>
      <StyledTableCell>SPECIAL DEF</StyledTableCell>
      <StyledTableCell>SPEED</StyledTableCell>
    </>
  );

  const dataRows = (
    <TableRow>
      {props.statsArray?.map((stats) => {
        return (
          <StyledTableCell key={stats.stat.name}>
            {stats.base_stat}
          </StyledTableCell>
        );
      })}
    </TableRow>
  );

  return <TablePokemon name={headerColumns} rows={dataRows} />;
};

export { TableMoves, TableAbilities, TableStats };
