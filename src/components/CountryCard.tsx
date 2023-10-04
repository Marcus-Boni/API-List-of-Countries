import Image from "next/image";
import Link from "next/link";

export const CountryCard = ({
  name,
  ptName,
  flag,
  altFlag,
}: {
  name?: string;
  ptName?: string;
  flag?: string;
  altFlag?: string;
}) => {
  return (
    <Link href={`/pais/${name}`} key={name}>
      <article className="flex h-64 min-w-full flex-col items-center gap-2 rounded-xl border-2 bg-gray-300 p-2 transition-all hover:border-indigo-200 hover:shadow-xl">
        <div className="relative h-40 w-full overflow-hidden rounded-xl">
          <Image src={flag} alt={altFlag} fill className="object-cover" />
        </div>
        <h1 className="font-bold">{ptName}</h1>
      </article>
    </Link>
  );
};
