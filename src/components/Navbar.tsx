import Image from "next/image";

export const Navbar = () => {
  return (
    <header className="h-full w-full bg-white p-2">
      <nav className="container relative mx-auto flex flex-col items-center justify-between sm:flex-row">
        <div className="flex items-center gap-3">
          <Image src="/logo.svg" alt="World logo" width={48} height={48} />
          <h1 className="text-2xl font-bold">Lista de Países</h1>
        </div>
      </nav>
    </header>
  );
};
