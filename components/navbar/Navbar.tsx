import Link from "next/link";
import { HomeIcon } from "@primer/octicons-react";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
  { path: "./about", text: "About" },
  { path: "./pricing", text: "Pricing" },
  { path: "./contact", text: "Contact" },
];

export const Navbar = async () => {
  return (
    <nav className="flex bg-blue-900 bg-opacity-30 p-2 m-2 text-white rounded">
      <Link className="flex items-center" href={"/"}>
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>
      {navItems.map((navItem) => (
        <ActiveLink
          key={navItem.path}
          {...navItem} // operador spread, para que se pueda usar el path y el text en el componente ActiveLink
        />
      ))}
    </nav>
  );
};
