import axios from "axios";

const url = "https://rickandmortyapi.com/api/character/";

export class Services {
  static async getCharacters() {
    const res = await axios.get(url);
    return res.data;
  }
}
