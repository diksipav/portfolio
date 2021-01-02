/** @jsx jsx */
import { jsx } from "theme-ui";

interface LinkProps {
  href: string;
  src: string;
  srcOnHover: string;
  alt: string;
}

const FooterLink: React.FC<LinkProps> = ({ href, src, srcOnHover, alt }) => (
  <a href={href}>
    <img
      sx={{
        variant: "containers.footerLink",
      }}
      src={src}
      alt={alt}
      onMouseOver={(e): void => {
        srcOnHover && (e.currentTarget.src = srcOnHover);
      }}
      onMouseOut={(e): void => {
        srcOnHover && (e.currentTarget.src = src);
      }}
    />
  </a>
);

export default FooterLink;
