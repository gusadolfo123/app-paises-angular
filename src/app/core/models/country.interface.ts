export interface Country {
  flag: string;
  name: string;
  alpha2Code: string;
  alpha3Code: string;
  capital: string;
  population: number;
  numericCode: string;
  translations: Translations;
}

export interface Translations {
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  br: string;
  pt: string;
  nl: string;
  hr: string;
  fa: string;
}
