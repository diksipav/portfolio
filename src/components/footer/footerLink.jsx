/** @jsx jsx */
import { jsx } from "theme-ui";

const FooterLink = ({ href, src, srcOnHover, alt }) => (
  <a href={href}>
    <img
      sx={{
        variant: "containers.footerLink",
      }}
      src={src}
      alt={alt}
      onMouseOver={(e) => {
        srcOnHover && (e.currentTarget.src = srcOnHover);
      }}
      onMouseOut={(e) => {
        srcOnHover && (e.currentTarget.src = src);
      }}
    />
  </a>
);

export default FooterLink;
