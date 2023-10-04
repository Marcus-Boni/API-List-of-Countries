import { Country } from "@/types";
import { getCountries } from "@/utils/getCountries";
import { CountryCard } from "@/components";

export default async function Home() {
  const data = await getCountries();
  return (
    <>
      <section className="container mt-12 grid w-full grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data.map((country: Country) => (
          <CountryCard
            key={country.name.common}
            name={country.name.common}
            ptName={country.translations.por.common}
            flag={country.flags.svg}
            altFlag={country.flags.alt}
          />
        ))}
      </section>
    </>
  );
}
