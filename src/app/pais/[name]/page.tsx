import { getCountryBordersByName, getCoutriesByName } from "../../../../utils/getCountries";
import { BackButton, CountryCard, SpecificCountryCard } from "@/components";

const CountryPage = async ({ params: { name } }: { params: { name: string } }) => {
  const country = await getCoutriesByName(decodeURI(name));
  const borderCountries = await getCountryBordersByName(decodeURI(name));

  return (
    <section className="container flex flex-col">
      <h1 className="my-16 text-5xl font-bold">{country.translations.por.common}</h1>
      <BackButton />
      <SpecificCountryCard
        capital={country.capital ? country.capital[0] : undefined}
        region={country.region}
        subregion={country.subregion}
        population={country.population}
        flag={country.flags.svg}
        altflag={country.flags.alt} // verificar se existe alt flag no objeto country
        languages={country.languages ? Object.values(country.languages) : undefined}
      />
      <section>
        <h2 className="mt-12 text-2xl font-semibold text-gray-800">Países que fazem fronteira</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {borderCountries?.map((border) => (
            <CountryCard key={border.name} {...border}/>
          ))}
        </div>
      </section>
    </section>
  );
};

export default CountryPage;
