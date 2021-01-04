/** @jsx jsx */
import { jsx, Grid } from "theme-ui";

const Resume = ({ resume }) => {
  const { overview, sections } = resume[0];

  return (
    <main
      sx={{
        variant: "containers.page",
        justifyContent: "flex-start",
      }}
    >
      <Grid columns={[[1], [1], [1], [2]]} gap={4}>
        <p sx={{ variant: "styles.p", p: "0 20px 30px " }}>{overview}</p>
      </Grid>

      <Grid columns={[[1], [1], [1], [2]]} gap={4} sx={{ pb: "66px" }}>
        {sections.map((section) => (
          <div key={section.title} sx={{ variant: "containers.section" }}>
            <p
              sx={{
                variant: "styles.h3",
                position: "absolute",
                top: ["-39px", "-39px", "-39px", "-40px"],
                left: ["20px"],
              }}
            >
              {section.title}
            </p>
            {section.items.map((item, index) => (
              <Grid
                columns={[[1], [1], [1], [2, "1fr 2fr"]]}
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
        ))}
      </Grid>
    </main>
  );
};

export default Resume;

export const getStaticProps = async () => {
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
};
