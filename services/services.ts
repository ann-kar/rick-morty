import axios from "axios";
import { Gender, Status } from "../interfaces/interfaces";
import qs from "qs";

const url = "https://rickandmortyapi.com/api/character/";

export interface IFilters {
  name?: string;
  species?: string;
  status?: Status | "";
  gender?: Gender | "";
  page?: number;
}

export class Services {
  static async getCharacter({ id }: { id: number }) {
    const res = await axios.get(url + id);
    return res.data;
  }
  static async getCharacters({
    name,
    status,
    gender,
    pageParam,
  }: {
    name: string;
    status: Status | "";
    gender: Gender | "";
    pageParam: any;
  }) {
    const params: IFilters = {};
    if (name) {
      params.name = name;
    }
    params.status = status;
    params.gender = gender;
    params.page = pageParam;
    const res = await axios.get(url, {
      params: params,
      paramsSerializer: (params) => {
        return qs.stringify(params);
      },
    });
    return res.data;
  }
}
