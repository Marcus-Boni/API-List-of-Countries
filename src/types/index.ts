export type Country = {
  name: {
    common: string;
  };
  translations: {
    por: {
      common: string;
    };
  };
  flags: {
    svg: string;
    alt: string;
  };
  capital: string[];
  region: string;
  subregion: string;
  population: number;
  languages: {
    [key: string]: string;
  };
  borders?: string[];
  cca3: string;
};

export type SpecificCountryCardProps = {
  capital: string | undefined;
  region: string;
  subregion: string;
  population: number;
  flag: string;
  altflag: string;
  languages: string[] | undefined;
};
