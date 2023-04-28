export interface ICountry {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  subregion: string;
  region: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  flags: IFlags;
  currencies: ICurrency[];
  languages: ILanguage[];
  translations: ITranslations;
  flag: string;
  regionalBlocs: IRegionalBloc[];
  cioc: string;
  independent: boolean;
}

interface IFlags {
  svg: string;
  png: string;
}

export interface ICurrency {
  code: string;
  name: string;
  symbol: string;
}

export interface ILanguage {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

interface ITranslations {
  br: string;
  pt: string;
  nl: string;
  hr: string;
  fa: string;
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  hu: string;
}

interface IRegionalBloc {
  acronym: string;
  name: string;
}
