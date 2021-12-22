import React from "react";

export const PokemonIdContext = React.createContext<any>(1);

export const PokemonIdProvider = (props: any) => {
  const [pokemonName, setPokemonName] = React.useState();

  return (
    <PokemonIdContext.Provider value={{ pokemonName, setPokemonName }}>
      {props.children}
    </PokemonIdContext.Provider>
  );
};
