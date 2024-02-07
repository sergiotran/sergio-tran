import type { FC, PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.scss";
import classNames from "classnames";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sergio Tran",
  description: "My personal blog",
};

const Layout: FC<Readonly<PropsWithChildren>> = ({ children }) => {
  const classes = classNames(inter.className, "bg-gray-100");
  return (
    <html lang="en">
      <body className={classes}>{children}</body>
    </html>
  );
};

export default Layout;
