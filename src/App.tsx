import React from "react";
import Menu from "./components/menu/menu";
import PokemonScreen from "./components/pokemonScreen/pokemonScreen";
import { ThemeProvider, createTheme } from "@mui/material";
import { PokemonIdProvider } from "./providers/pokemonId";
import "@fontsource/poppins";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins"].join(","),
  },
});

function App() {
  return (
    <div className="App">
      <PokemonIdProvider>
        <ThemeProvider theme={theme}>
          <Menu />
          <PokemonScreen />
        </ThemeProvider>
      </PokemonIdProvider>
    </div>
  );
}

export default App;
