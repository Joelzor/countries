import { ICurrency, ILanguage } from "./country";

export interface ICountryDetails {
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  flag: string;
  domain: string[];
  currencies: ICurrency[];
  languages: ILanguage[];
  borderCountries: string[];
}
