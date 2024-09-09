import { Box, Grid, Typography } from "@mui/material";
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

export const InfrastructureItem = () => {
  return (
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
            Premium Quality Materials
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
              maxWidth: 800,
            }}
          >
            We source the finest materials from trusted suppliers to ensure that
            every product meets our high standards. Our commitment to quality
            starts with the selection of raw materials.{" "}
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
              p: 6.5,
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
              cursor: "pointer",
              transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 22, sm: 24 },
                fontWeight: 600,
                mb: 2,
              }}
            >
              <BsBag style={{ marginRight: 8 }} /> Cotton
            </Typography>
            <Typography
              sx={{
                mt: 1,
                textAlign: "center",
                maxWidth: 400,
                lineHeight: 1.5,
              }}
            >
              We use the highest quality cotton, known for its softness,
              breathability, and durability. Our cotton is meticulously selected
              and processed to create textiles that are gentle on the skin and
              long-lasting.
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
              cursor: "pointer",
              transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 22, sm: 24 },
                fontWeight: 600,
                mb: 2,
                display: "flex",
                alignItems: "center",
              }}
            >
              <BsRecycle style={{ marginRight: 8 }} /> Eco-Friendly Materials
            </Typography>
            <Typography
              sx={{
                mt: 1,
                textAlign: "center",
                maxWidth: 400,
                lineHeight: 1.5,
              }}
            >
              In line with our commitment to sustainability, we also use
              eco-friendly materials such as jute and recycled fabrics. These
              materials not only reduce our environmental footprint but also add
              unique textures and characteristics to our products.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          maxWidth: 800,
          margin: "0 auto",
          padding: 4,
          backgroundColor: "#f5f5f5",
          borderRadius: 2,
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="body1"
          component="p"
          sx={{
            fontSize: 20,
            fontWeight: 600,
            color: "#333",
            fontStyle: "italic",
            lineHeight: 1.6,
            textAlign: "center",
            "&::before": {
              content: '"\\201C"',
              display: "inline-block",
              marginRight: "0.2em",
              verticalAlign: "-0.3em",
              fontSize: "1.5em",
              fontWeight: "bold",
              color: "#333",
            },
            "&::after": {
              content: '"\\201D"',
              display: "inline-block",
              marginLeft: "0.2em",
              verticalAlign: "-0.3em",
              fontSize: "1.5em",
              fontWeight: "bold",
              color: "#333",
            },
          }}
        >
          {
            " To maintain a high quality and meet the delivery schedule set by our customers, we deeply rely on our sound infrastructure."
          }
        </Typography>
      </Box>
    </Box>
  );
};
