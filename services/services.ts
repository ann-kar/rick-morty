import axios from "axios";
import { ICharacterFilter } from "../interfaces/interfaces";

const url = "https://rickandmortyapi.com/api/character/";

export class Services {
  static async getCharacters({name}: {name:string}) {
    const params: ICharacterFilter = {};
    if (name) {
      params.name = name;
    }

    const res = await axios.get(url, { params: params });
    return res.data;
  }
}
