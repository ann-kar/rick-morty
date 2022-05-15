import axios from "axios";
import { ICharacterFilter } from "../interfaces/interfaces";

const url = "https://rickandmortyapi.com/api/character/";

export class Services {
  static async getCharacters(nameQuery:string) {
    const params: ICharacterFilter = {};
    if (nameQuery) {
      params.name = nameQuery;
    }

    const res = await axios.get(url, { params: params });
    return res.data;
  }
}
