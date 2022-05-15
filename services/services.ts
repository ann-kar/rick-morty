import axios from "axios";
import { ICharacterFilter, Status } from "../interfaces/interfaces";

const url = "https://rickandmortyapi.com/api/character/";

export class Services {
  static async getCharacters({
    name,
    status,
  }: {
    name: string;
    status: Status | undefined;
  }) {
    const params: ICharacterFilter = {};
    if (name) {
      params.name = name;
    }
    if (status) {
      params.status = status;
    } else {
      delete params.status;
    }
    const res = await axios.get(url, { params: params });
    return res.data;
  }
}
