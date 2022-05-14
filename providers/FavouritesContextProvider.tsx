import React, { useContext, useState, createContext, ReactNode } from "react";
import { ICharacter } from "../interfaces/interfaces";

interface IFavouritesContext {
  favourites: ICharacter[];
  addToFavourites: (character: ICharacter) => void;
  removeFromFavourites: (id: ICharacter["id"]) => void;
}

export const FavouritesContext = createContext<IFavouritesContext | null>(null);

export function FavouritesContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [favourites, setFavourites] = useState<ICharacter[]>([]);

  const addToFavourites = (character: ICharacter) => {
    setFavourites((prevFavs) => [...prevFavs, character]);
  };
  const removeFromFavourites = (id: number) => {
    let tempFavs = favourites;
    let filtered = tempFavs.filter((char) => char.id !== id);
    setFavourites(filtered);
  };
  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
      }}>
      {children}
    </FavouritesContext.Provider>
  );
}

export function useFavourites() {
  const context = useContext(FavouritesContext);
  if (!context) {
    throw new Error("No data provided");
  }
  return context;
}
