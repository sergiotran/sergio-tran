"use client";
import type { FC, PropsWithChildren } from "react";
import Header from "../Header";

const RootLayout: FC<Readonly<PropsWithChildren>> = ({ children }) => {
  return (
    <div className="flex flex-col gap-4">
      <Header />
      <main>
        <div className="container">{children}</div>
      </main>
    </div>
  );
};

export default RootLayout;
