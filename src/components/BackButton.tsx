import Image from "next/image";
import Link from "next/link";

export const BackButton = () => {
  return (
    <Link href="/" className="flex text-left hover:underline">
      <Image src="/arrow-back.svg" alt="arrow to back" width={24} height={24} />
      <p>Voltar</p>
    </Link>
  );
};
