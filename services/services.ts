import axios from "axios";
import { ICharacterFilter, Status } from "../interfaces/interfaces";

const url = "https://rickandmortyapi.com/api/character/";

export class Services {
  static async getCharacter({ id }: { id: number }) {
    const res = await axios.get(url + id);
    return res.data;
  }

  static async getCharacters({
    name,
    status,
    pageParam,
  }: {
    name: string;
    status: Status | undefined;
    pageParam: any;
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
    params.page = pageParam;
    const res = await axios.get(url, { params: params });
    return res.data;
  }
}
