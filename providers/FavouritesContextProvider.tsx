import React, {
  useContext,
  useState,
  createContext,
  ReactNode,
  useEffect,
} from "react";
import { ICharacter } from "../interfaces/interfaces";
import { produce } from "immer";

interface IFavouritesContext {
  favourites: ICharacter[];
  addToFavourites: (character: ICharacter) => void;
  removeFromFavourites: (id: ICharacter["id"]) => void;
}

export const FavouritesContext = createContext<IFavouritesContext | null>(null);

const getSavedItems = () => {
  const savedItems = localStorage.getItem("FAVOURITES");
  if (savedItems) {
    console.log("saved: ", JSON.parse(savedItems));
  } else {
    ("nothing saved");
  }

  if (!savedItems) {
    return [];
  }
  try {
    return JSON.parse(savedItems);
  } catch (err) {
    console.log(err);
    return [];
  }
};

export function FavouritesContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [favourites, setFavourites] = useState<ICharacter[]>([]);
  const [isStorageFetched, setIsStorageFetched] = useState(false);

  useEffect(() => {
    setFavourites(getSavedItems());
    setIsStorageFetched(true);
  }, []);

  useEffect(() => {
    if (isStorageFetched) {
      localStorage.setItem("FAVOURITES", JSON.stringify(favourites));
    }
  }, [favourites, isStorageFetched]);

  const addToFavourites = (character: ICharacter) => {
    setFavourites(
      produce((draft) => {
        if (draft) {
          return [...draft, character];
        }
      })
    );
  };

  const removeFromFavourites = (id: number) => {
    setFavourites(
      produce((draft) => {
        return draft.filter((character) => character.id !== id);
      })
    );
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
