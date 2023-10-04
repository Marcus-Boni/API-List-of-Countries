import { Country } from "@/types";

export const getCountries = async (): Promise<Country[]> => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();

  return data;
};

export const getCoutriesByName = async (name: string): Promise<Country> => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data: Country[] = await response.json();

  return data.find((country: Country) => country.name.common === name)!;
};

export const getCountryBordersByName = async (name: string) => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data: Country[] = await response.json();
  const country = data.find((country: Country) => country.name.common === name)!;

  return country.borders?.map((border) => {
    const borderCountry = data.find((country) => country.cca3 === border)!;

    return {
      name: borderCountry.name.common,
      ptName: borderCountry.translations.por.common,
      flag: borderCountry.flags.svg,
      flagAlt: borderCountry.flags.alt,
    };
  });
};
