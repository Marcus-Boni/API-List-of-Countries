import Image from "next/image";

export const Navbar = () => {
  return (
    <header className="h-16 w-full bg-white p-2">
      <nav className="container mx-auto flex items-center gap-3">
        <Image src="/logo.svg" alt="World logo" width={48} height={48} />
        <h1 className="text-2xl font-bold">Lista de Países</h1>
      </nav>
    </header>
  );
};
