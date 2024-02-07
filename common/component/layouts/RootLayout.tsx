"use client";
import type { FC, PropsWithChildren } from "react";
import Header from "../Header";

const RootLayout: FC<Readonly<PropsWithChildren>> = ({ children }) => {
  return (
    <div className="flex flex-col gap-4">
      <Header />
      <main>
        <div className="container">
          <div className="bg-white p-4 rounded-lg">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default RootLayout;
