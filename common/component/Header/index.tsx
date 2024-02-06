import React from "react";
import Brand from "./sub-components/Brand";
import Navigation from "./sub-components/Navigation";

const Header = () => {
  return (
    <header className="relative bg-white shadow-xl">
      <div className="container">
        <div className="flex flex-row items-center">
          <Brand />
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
