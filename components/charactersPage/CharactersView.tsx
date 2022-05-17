import { SearchBox } from "./SearchBox";
import { useState } from "react";
import { SearchResults } from "./SearchResults";
import { Gender, Status } from "../../interfaces/interfaces";
import { Hero } from "../heroSection/Hero";
import { HeroImage } from "../heroSection/HeroImage";

export const CharactersView = () => {
  const [nameQuery, setNameQuery] = useState("");
  const [status, setStatus] = useState<Status | "">("");
  const [gender, setGender] = useState<Gender | "">("");

  return (
    <div className="flex flex-col">
      <Hero
        header={"See who is who!"}
        subheader={
          "The ultimate collection of all Rick and Morty characters, dead and alive, human and inhuman, genderless and genderful. See who you can find!"
        }>
        <HeroImage
          src="/open-your-eyes.png"
          alt="main graphic: Open your eyes, Morty!"
        />
      </Hero>
      <div className="w-full xl:max-w-7xl mx-auto flex justify-start">
        <SearchBox
          setNameQuery={setNameQuery}
          setStatus={setStatus}
          setGender={setGender}
        />
      </div>
      <SearchResults nameQuery={nameQuery} status={status} gender={gender} />
    </div>
  );
};
