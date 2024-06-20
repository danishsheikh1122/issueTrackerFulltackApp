import React from "react";
import Link from "next/link";
import { IoBugOutline } from "react-icons/io5";
const NavBar = () => {
  const links = [
    {
      name: "Dashboard",
      href: "/",
    },

    {
      name: "Issues",
      href: "/issues",
    },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <IoBugOutline />
      </Link>
      <ul className="flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-zinc-500 hover:text-zinc-800 capitalize transition-colors "
            >
              {link.name}
            </Link>
          ))}
       </ul>
    </nav>
  );
};

export default NavBar;
