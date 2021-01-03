/** @jsx jsx */
import { jsx } from "theme-ui";
import FooterLink from "./footerLink";

const Footer = () => (
  <footer
    sx={{
      height: "60px",
      bg: "background",
      p: "0 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      //boxShadow: "0 -4px 16px rgba(0, 0, 0, 0.2)",
      boxShadow: "0px -5px 45px 2px rgba(0,0,0,0.3)",
    }}
  >
    <FooterLink
      href="https://www.linkedin.com/in/dijana-pavlovic-958622108/"
      src="linkedin.svg"
      srcOnHover="linkedin-light.svg"
      alt="Linkedin"
    />
    <FooterLink
      href="https://github.com/DijanaPavlovic"
      src="github.svg"
      srcOnHover="github-light.svg"
      alt="Github"
    />
    <FooterLink
      href="https://twitter.com/DijanaPavlovic_"
      src="twitter.svg"
      srcOnHover="twitter-light.svg"
      alt="Twitter"
    />
  </footer>
);

export default Footer;
