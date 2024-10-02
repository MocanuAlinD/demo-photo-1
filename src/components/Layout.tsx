import React from "react";
import NavbarPages from "./NavbarPages";

const Layout = ({ children }) => {
  const title = children.props.category;
  return (
    <>
      <NavbarPages title={title} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
