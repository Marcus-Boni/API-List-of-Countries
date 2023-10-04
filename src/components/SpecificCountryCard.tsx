import { SpecificCountryCardProps } from "@/types";
import { formatNumbers } from "../utils/formatNumbers";
import Image from "next/image";

export const SpecificCountryCard = ({
  capital,
  region,
  subregion,
  population,
  flag,
  altflag,
  languages,
}: SpecificCountryCardProps) => {
  return (
    <article className="mt-2 flex flex-col items-center justify-between rounded-xl bg-gray-300 p-6 md:flex-row md:p-12">
      <div className="mt-2 flex flex-col gap-3 text-left md:mt-0">
        {capital && (
          <p className="text-lg">
            <b>🏙️ Capital: </b> {capital}
          </p>
        )}
        <p className="text-lg">
          <b>🗺️ Continente:</b> {region} {subregion && `- ${subregion}`}
        </p>
        <p className="text-lg">
          <b>👨‍👩‍👧‍👦 População:</b> {formatNumbers(population)}
        </p>
        <p className="text-lg">
          <b>🗣️ Línguas faladas:</b>
          <br />
          {languages &&
            languages.map((language) => (
              <span
                className="mr-2 rounded-full bg-indigo-700 px-2 py-1 text-sm text-white last-of-type:mr-0"
                key={language}
              >
                {language}
              </span>
            ))}
          {!languages && (
            <span className="mr-2 rounded-full bg-indigo-700 px-2 py-1 text-sm text-white last-of-type:mr-0">
              Não informado
            </span>
          )}
        </p>
      </div>
      <div className="relative order-first my-2 h-64 w-full shadow-md md:order-last md:w-96">
        <Image src={flag} alt={altflag ? altflag : "Non informed Image"} fill className="object-cover" />
      </div>
    </article>
  );
};
