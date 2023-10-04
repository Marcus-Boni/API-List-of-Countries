import { SpecificCountryCardProps } from "@/types";
import { formatNumbers } from "../../utils/formatNumbers";
import Image from "next/image";

export const SpecificCountryCard = ({ capital, region, subregion, population, flag, altflag, languages }: SpecificCountryCardProps) => {
  return (
    <article className="mt-2 flex items-center justify-between rounded-xl bg-gray-300 p-12">
      <div className="flex flex-col gap-3 text-left">
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
      <div className="relative order-first my-2 h-64 w-96 shadow-md md:order-last">
        <Image src={flag} alt={altflag ? altflag : "Non informed Image"} fill className="object-cover" />
      </div>
    </article>
  );
};
