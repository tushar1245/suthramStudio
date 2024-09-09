import { Box, Grid, Typography } from "@mui/material";
import img1 from "../../utils/photos/usus.jpg";
import { BsRecycle, BsBag } from "react-icons/bs";
import { keyframes } from "@emotion/react";
const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AboutUs = () => {
  return (
    <>
      <Box
        sx={{
          background: "F5F5F5",
          p: 8,
        }}
      >
        <Grid container>
          <Grid item xs={12} sm={12} md={6} sx={{ p: 2, pt: 0 }}>
            <Typography variant={"h4"}>About SUTRAM CREATIONS</Typography>
            <Typography variant={"h6"} sx={{ pt: 2 }}>
              At Sutram Creations, we weave more than just textiles; we weave
              stories of tradition, innovation, and unparalleled craftsmanship.
              Established with a vision to bring the finest textiles to
              discerning customers, Sutram Creations has become synonymous with
              quality and elegance in the textile industry.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={img1}
                alt="Image Description"
                sx={{ width: "70%" }}
              />
            </Box>
          </Grid>{" "}
        </Grid>
        {/* <Stack direction={"row"}></Stack> */}
      </Box>

      <Box sx={{ background: "#F5F5F5", py: 8 }}>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            ms={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 4,
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: {
                  xs: 25,
                  sm: 30,
                  md: 35,
                  lg: 40,
                },
                color: "#002547",
                textAlign: "center",
                textTransform: "uppercase",
                letterSpacing: 2,
              }}
            >
              Our Journey
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            ms={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              pl: { xs: 2, sm: 6 },
              pr: { xs: 2, sm: 6 },
              mb: 6,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 18, sm: 22 },
                color: "#002547",
                maxWidth: 900,
              }}
            >
              Founded in 2020, Sutram Creations started as a small, passionate
              venture dedicated to preserving the rich heritage of textile
              artistry. Over the years, we have grown into a leading name in the
              industry, known for our unique blend of traditional techniques and
              contemporary designs. Our journey has been marked by a relentless
              pursuit of excellence and a commitment to delivering the best to
              our customers.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            sx={{
              p: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                p: 4,
                backgroundImage:
                  "linear-gradient(135deg, #381462, #501C8C, #8646D0)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "80%",
                color: "#fff",
                pt: 2,
                borderRadius: 4,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                animation: `${fadeInAnimation} 1s ease-in-out`,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 22, sm: 24 },
                  fontWeight: 600,
                  mb: 1,
                }}
              >
                Our Mission
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  textAlign: "center",
                  maxWidth: 400,
                  lineHeight: 1.5,
                }}
              >
                Our mission at Sutram Creations is to create textiles that
                inspire and delight. We aim to provide our customers with
                high-quality products that not only meet their needs but also
                exceed their expectations. Every piece we create is a testament
                to our dedication to craftsmanship, innovation, and
                sustainability.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            sx={{
              p: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                p: 4,
                backgroundImage:
                  "linear-gradient(135deg, #002547, #003768, #003768 )",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "80%",
                color: "#fff",
                pt: 2,
                borderRadius: 4,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                animation: `${fadeInAnimation} 1s ease-in-out`,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 22, sm: 24 },
                  fontWeight: 600,
                  mb: 1,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Our Vision{" "}
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  textAlign: "center",
                  maxWidth: 400,
                  lineHeight: 1.5,
                }}
              >
                To be a global leader in the textile industry, recognized for
                our exceptional quality, innovative designs, and ethical
                practices. We envision a world where Sutram Creations textiles
                bring beauty and comfort to every home and wardrobe.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            sx={{
              p: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                p: 4,
                backgroundImage:
                  "linear-gradient(135deg, #002547, #003768, #003768 )",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "80%",
                color: "#fff",
                pt: 2,
                borderRadius: 4,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                animation: `${fadeInAnimation} 1s ease-in-out`,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 22, sm: 24 },
                  fontWeight: 600,
                  mb: 1,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Sustainability
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  textAlign: "center",
                  maxWidth: 400,
                  lineHeight: 1.5,
                }}
              >
                We believe in creating a sustainable future for the textile
                industry. Our practices are designed to minimize our
                environmental impact and promote the well-being of our artisans.
                From using eco-friendly materials to ensuring fair trade
                practices, sustainability is woven into every aspect of our
                business.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            sx={{
              p: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                p: 4,
                backgroundImage:
                  "linear-gradient(135deg, #381462, #501C8C, #8646D0)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "80%",
                color: "#fff",
                pt: 2,
                borderRadius: 4,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                animation: `${fadeInAnimation} 1s ease-in-out`,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 22, sm: 24 },
                  fontWeight: 600,
                  mb: 1,
                }}
              >
                Innovation
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  textAlign: "center",
                  maxWidth: 400,
                  lineHeight: 1.5,
                }}
              >
                Innovation drives us at Sutram Creations. We continually explore
                new techniques and trends to bring you textiles that are fresh,
                unique, and ahead of the curve. Our design team is constantly
                inspired by the latest fashion and interior design trends,
                ensuring that our collections are always relevant and desirable.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
