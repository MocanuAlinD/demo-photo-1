import React from "react";
import NavbarPages from "./NavbarPages";

const Layout = ({ children, title }: {children: JSX.Element, title: string}) => {
  return (
    <>
      <NavbarPages title={title} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
