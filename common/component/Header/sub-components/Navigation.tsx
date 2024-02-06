"use client";
import { useEffect, type FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import classNames from "classnames";

interface NavigationItemProps {
  id: number;
  href: string;
  value: string;
  active?: boolean;
}

const NAVIGATION_ITEMS: NavigationItemProps[] = [
  {
    id: 0,
    href: "/",
    value: "Home",
  },
  {
    id: 1,
    href: "/about",
    value: "About",
  },
  {
    id: 2,
    href: "/contact",
    value: "Contact",
  },
];

const Navigation: FC = () => {
  const pathname = usePathname();

  return (
    <nav className="grow h-full">
      <ul className="h-full flex-row items-center gap-2 justify-end hidden md:flex">
        {NAVIGATION_ITEMS.map((itemProps) => (
          <li key={itemProps.id}>
            <Link
              className={classNames(
                "py-3 px-4 hover:bg-gray-200 rounded-md text-base font-medium transition leading-loose",
                itemProps.href === pathname && "bg-gray-100"
              )}
              href={itemProps.href}
            >
              {itemProps.value}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
