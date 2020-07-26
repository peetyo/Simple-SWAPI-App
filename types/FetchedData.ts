import { Person } from "./Person";
export type FetchedData = {
  count: number;
  next: string;
  previous: null | string;
  results: Person[];
};
