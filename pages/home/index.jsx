/** @jsx jsx */
import { jsx } from "theme-ui";

const Home = () => (
  <main
    sx={{
      variant: "containers.page",
    }}
  >
    <div>
      <h1 sx={{ variant: "styles.h1", textAlign: "left" }}>Hello,</h1>
      <h2 sx={{ variant: "styles.h4" }}>
        my name is <span sx={{ fontWeight: "bold" }}>Dijana Pavlović, </span>
        and I am a<span sx={{ fontWeight: "bold" }}> software engineer.</span>
      </h2>
    </div>
  </main>
);

export default Home;
