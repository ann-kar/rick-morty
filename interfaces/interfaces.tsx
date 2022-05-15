export const statusArray = ["Dead", "Alive", "unknown"] as const;
export type Status = typeof statusArray[number];

export const genderArray = ["Female", "Male", "Genderless", "unknown"] as const;
export type Gender = typeof genderArray[number];

export interface IServices {
  getCharacter<T>(
    id: T
  ): Promise<IApiResponse<T extends number ? ICharacter : ICharacter[]>>;
  getCharacters(
    filters?: ICharacterFilter
  ): Promise<IApiResponse<IInfo<ICharacter[]>>>;
}

export interface ICharacterLocation {
  name: string;
  url: string;
}

export interface IResourceBase {
  id: number;
  name: string;
  url: string;
  created: string;
}

export interface IEndpoints {
  character: string;
  location: string;
  episode: string;
}

export interface ICharacterFilter {
  name?: string;
  type?: string;
  species?: string;
  status?: Status;
  gender?: Gender;
  page?: number;
}

export interface ILocationFilter
  extends Pick<ICharacterFilter, "name" | "type" | "page"> {
  dimension?: string;
}

export interface IEpisodeFilter
  extends Pick<ICharacterFilter, "name" | "page"> {
  episode?: string;
}

export interface ICharacter extends IResourceBase {
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  origin: ICharacterLocation;
  location: ICharacterLocation;
  image: string;
  episode: string[];
}

export interface ILocation extends IResourceBase {
  type: string;
  dimension: string;
  residents: ICharacter[];
}

export interface IEpisode extends IResourceBase {
  air_date: string;
  episode: string;
  character: string[];
}

export interface IApiResponse<T> {
  status: Status;
  statusMessage: string;
  data: T;
}

export interface IInfo<T> {
  /**
   * The API will automatically paginate the responses. You will receive up to `20` documents per page.
   */
  info?: {
    /** The length of the response */
    count: number;
    /** The amount of pages */
    pages: number;
    /** Link to the next page (if it exists) */
    next: string | null;
    /** Link to the previous page (if it exists) */
    prev: string | null;
  };
  results?: T;
}
