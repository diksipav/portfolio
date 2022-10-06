/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const [showNavScreen, setShowNavScreen] = useState(false);

  const toggleNavScreen = () => {
    setShowNavScreen(!showNavScreen);
  };

  const closeNavScreen = (e, href) => {
    e.preventDefault();

    if (href) {
      router.push(href);
    }
    setShowNavScreen(false);
  };

  return (
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
          justifyContent: "space-between",
          height: "100%",
          padding: "0 20px",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Link href="/home">
          <a
            sx={{
              lineHeight: 1,
              paddingTop: "3px",
              width: "40%",
              cursor: "pointer",
            }}
          >
            <img
              src="logo.svg"
              sx={{ marginLeft: "20px", width: "44px" }}
            ></img>
          </a>
        </Link>
        {/* <Link href="/blog">
          <a sx={{ variant: "containers.link" }}>blog</a>
        </Link> */}
        <div sx={{ width: "40%", textAlign: "end" }}>
          {/*} <Link href="/about">
            <a
              sx={{
                variant: "containers.link",
                display: ["none", "none", "inline-block"],
              }}
            >
              about
            </a>
          </Link> 
           <Link href="/projects">
            <a
              sx={{
                variant: "containers.link",
                display: ["none", "none", "inline-block"],
              }}
            >
              projects
            </a> 
           </Link> */}
          <Link href="/resume">
            <a
              sx={{
                variant: "containers.link",
                display: ["none", "none", "inline-block"],
              }}
            >
              resume
            </a>
          </Link>
          <a>
            <img
              src="hamburger.svg"
              alt="Hamburger. Open navigation screen here."
              sx={{
                display: ["inline-block", "inline-block", "none"],
                width: "24px",
                pt: "4px",
              }}
              onClick={toggleNavScreen}
            />
          </a>
        </div>
        <div
          style={{ display: showNavScreen ? "flex" : "none" }}
          sx={{
            position: "fixed",
            height: "100vh",
            width: "100%",
            zIndex: 3,
            background: `linear-gradient(
              rgba(62, 100, 95, 0.8), 
              rgba(62, 100, 95, 0.8))
              ,url(profile-bg.jpg)`,
            backgroundSize: "cover",
            top: 0,
            left: 0,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a onClick={(e) => closeNavScreen(e)}>
            <img
              src="close.svg"
              sx={{
                width: "22px",
                position: "absolute",
                top: "24px",
                right: "21px",
              }}
            />
          </a>
          <a
            sx={{ variant: "containers.linkLight" }}
            onClick={(e) => closeNavScreen(e, "/home")}
          >
            home
          </a>
          {/* <a
            sx={{ variant: "containers.linkLight" }}
            onClick={(e) => closeNavScreen(e, "/blog")}
          >
            blog
          </a>
          <a
            sx={{ variant: "containers.linkLight" }}
            onClick={(e) => closeNavScreen(e, "/about")}
          >
            about
          </a>
          <a
            onClick={(e) => closeNavScreen(e, "/projects")}
            sx={{
              variant: "containers.linkLight",
            }}
          >
            projects
          </a> */}
          <a
            onClick={(e) => closeNavScreen(e, "/resume")}
            sx={{
              variant: "containers.linkLight",
            }}
          >
            resume
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
