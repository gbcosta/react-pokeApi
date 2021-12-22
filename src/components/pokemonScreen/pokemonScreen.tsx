import React from "react";
import api from "../../api/api";
import { IPokemon } from "../../interfaces/pokemon";
import { Box, Paper, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import {
  TableAbilities,
  TableMoves,
  TableStats,
} from "../tablePokemonData/tablePokemonData";

import ButtonPagination from "../buttonPagination/buttonPagination";

import { PokemonIdContext } from "../../providers/pokemonId";

const PokemonScreen: React.FC = (props) => {
  const [pokemonData, setPokemonData] = React.useState<IPokemon>();
  const [pokemonId, setPokemonId] = React.useState<number>(1);

  const { pokemonName, setPokemonName } = React.useContext(PokemonIdContext);
  const [pokemonNameBuffer, setPokemonNameBuffer] = React.useState();

  React.useEffect(() => {
    if (pokemonName != undefined && pokemonName != pokemonNameBuffer) {
      api
        .get("pokemon/" + pokemonName)
        .then((response) => {
          setPokemonData(response.data);
          setPokemonId(response.data.id);
          setPokemonNameBuffer(pokemonName);
        })
        .catch((e) => {
          console.log("o_O");
          setPokemonNameBuffer(pokemonName);
        });
    } else {
      api.get("pokemon/" + pokemonId).then((response) => {
        setPokemonData(response.data);
      });
    }
  }, [pokemonName, pokemonId]);

  if (!pokemonData) {
    return <p>carregando...</p>;
  }

  function handleNextPokemon() {
    pokemonId + 1 < 898
      ? setPokemonId(pokemonId + 1)
      : console.log("there's no pokemon");
  }

  function handleBeforePokemon() {
    pokemonId - 1 > 0
      ? setPokemonId(pokemonId - 1)
      : console.log("there's no pokemon");
  }

  const capitalize = (s: string) => {
    return s && s[0].toUpperCase() + s.slice(1);
  };

  return (
    <Box
      display="flex"
      padding="2rem"
      flexDirection={"column"}
      sx={{ alignContent: "center" }}
      alignItems="center"
    >
      <Box
        display="flex"
        flexDirection="row"
        width="100%"
        justifyContent="center"
        alignItems="center"
      >
        <ButtonPagination onClick={handleBeforePokemon}>
          <NavigateBeforeIcon />
        </ButtonPagination>
        <Paper
          variant="outlined"
          sx={{
            width: { xs: 125, sm: 200, md: 300 },
            backgroundColor: "#4b4b4b",
          }}
        >
          <img
            src={pokemonData?.sprites.front_default}
            style={{ width: "inherit" }}
          />
        </Paper>
        <ButtonPagination onClick={handleNextPokemon}>
          <NavigateNextIcon />
        </ButtonPagination>
      </Box>

      <Typography variant="h4" color="white" mt={"0.4rem"}>
        {capitalize(pokemonData?.name)}
      </Typography>
      <Box width={{ xs: 270, sm: 500, md: 600, lg: 600 }}>
        <TableStats statsArray={pokemonData?.stats} />
        <TableAbilities abilitiesArray={pokemonData?.abilities} />
        <TableMoves movesArray={pokemonData?.moves} />
      </Box>
    </Box>
  );
};

export default PokemonScreen;
