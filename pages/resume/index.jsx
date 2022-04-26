/** @jsx jsx */
import { jsx, Grid } from "theme-ui";

const Resume = ({ resume }) => {
  const { overview, sections } = resume[0];

  return (
    <main
      sx={{
        variant: "containers.page",
        justifyContent: "flex-start",
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      <p sx={{ variant: "styles.p", p: "0 0 20px" }}>{overview}</p>
      {sections.map((section) => (
        <div sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <h3
            sx={{
              variant: "styles.h3",
              marginY: "12px",
            }}
          >
            {section.title}
          </h3>
          <div
            key={section.title}
            sx={{
              variant: "containers.section",
              paddingTop: 0,
              marginBottom: "30px",
            }}
          >
            {section.items.map((item, index) => (
              <Grid
                columns={[[1], [1], [1], [1, "1fr 2fr"]]}
                gap={3}
                sx={{ padding: "10px 0" }}
                key={`${item.title}-${index}`}
              >
                <div>
                  <p sx={{ variant: "styles.h6" }}>{item.title}</p>
                  <p sx={{ variant: "styles.italic" }}>{item.subtitle1}</p>
                  <p sx={{ variant: "styles.italic" }}>{item.subtitle2}</p>
                </div>
                <p sx={{ variant: "styles.p" }}>{item.desc}</p>
              </Grid>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
};

export default Resume;

export async function getStaticProps() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/resumes`);
  const resume = await response.json();

  if (!resume) {
    return {
      notFound: true,
    };
  }

  return {
    props: { resume },
    revalidate: 360,
  };
}
