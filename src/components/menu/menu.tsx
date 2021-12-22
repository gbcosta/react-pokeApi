import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  InputBase,
  styled,
  alpha,
  IconButton,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";

import { PokemonIdContext } from "../../providers/pokemonId";

import SearchIcon from "@mui/icons-material/Search";

import "@fontsource/press-start-2p/400.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2c2c2c",
      light: "white",
    },
  },
});

const pokeApiTheme = createTheme({
  typography: {
    fontFamily: ["'Press Start 2P'"].join(","),
  },
});

const Searchbar = styled("div")(({ theme }) => ({
  paddingLeft: 10,
  paddingRight: 10,
  background: alpha(theme.palette.common.white, 0.15),
  marginLeft: -15,
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    background: alpha(theme.palette.common.white, 0.25),
  },
}));

const Menu: React.FC = (props) => {
  const [inputValue, setInputValue] = React.useState<string>("");
  const { pokemonName, setPokemonName } = React.useContext(PokemonIdContext);

  const replaceSpace = (str: string) => {
    return str.replace(/\s/g, '-');
  }

  const inputValueChange = (e: any) => {

    setInputValue(e.target.value);
  };

  const keyPress = (e: any) => {
    if (e.charCode == 13) {
      console.log(replaceSpace(inputValue).toLowerCase());
      setPokemonName(replaceSpace(inputValue).toLowerCase());
    }
  };

  const searchClick = (e: any) => {
    setPokemonName(replaceSpace(inputValue).toLowerCase());
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <AppBar position="static">
          <Toolbar>
            <ThemeProvider theme={pokeApiTheme}>
              <Box>
                <a href="https://pokeapi.co/" target="_blank">
                  <Typography sx={{ color: "#ffffff" }}>
                    Poke<span style={{ color: "red" }}>API</span>
                  </Typography>
                </a>
              </Box>
            </ThemeProvider>
            <Box style={{ flexGrow: 70 }} />
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={searchClick}
            >
              <SearchIcon />
            </IconButton>
            <Searchbar>
              <InputBase
                placeholder="search..."
                sx={{ color: "primary" }}
                onKeyPress={keyPress}
                onChange={inputValueChange}
              />
            </Searchbar>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default Menu;
