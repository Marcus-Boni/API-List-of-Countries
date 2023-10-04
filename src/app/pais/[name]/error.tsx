"use client";

import Image from "next/image";
import Link from "next/link";

const Error = () => {
  return (
    <section className="container flex flex-col">
      <h1 className="my-16 text-5xl font-bold">Erro 404</h1>
      <p className="text-2xl">Página não encontrada</p>
      <Link href="/" className="flex items-center hover:underline">
        <Image src="/arrow-back.svg" alt="Voltar" width={50} height={50} />
        Voltar para a página inicial
      </Link>
    </section>
  );
};

export default Error;
