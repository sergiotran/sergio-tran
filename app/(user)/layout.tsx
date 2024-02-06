import RootLayout from "@/common/component/layouts/RootLayout";
import type { FC, PropsWithChildren } from "react";

const Layout: FC<Readonly<PropsWithChildren>> = ({ children }) => {
  return <RootLayout>{children}</RootLayout>;
};

export default Layout;
