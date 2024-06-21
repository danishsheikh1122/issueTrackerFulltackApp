'use client'
import React from "react";
import Link from "next/link";
import { IoBugOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import classNames from "classnames";
const NavBar = () => {
    const currentPath=usePathname()//this hook is dependent on broser api so makr nav bar as client cmp
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
    <nav className="flex space-x-6 border-b mb-2 px-5 h-14 items-center">
      <Link href="/">
        <IoBugOutline />
      </Link>
      <ul className="flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={classNames({
                "text-zinc-500": currentPath!== link.href,
                "text-zinc-900": currentPath === link.href,
                "hover:text-zinc-900 transition-colors  ":true,
              })} >
              {link.name}
            </Link>
          ))}
       </ul>
    </nav>
  );
};

export default NavBar;
