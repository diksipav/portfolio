/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

const Nav = () => (
  <header
    sx={{
      height: "70px",
      bg: "background",
    }}
  >
    <nav
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        variant: "containers.page",
        height: "100%",
      }}
    ></nav>
  </header>
);

export default Nav;
