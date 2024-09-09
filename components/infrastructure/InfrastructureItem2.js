import { Box, Grid, Typography } from "@mui/material";
import img1 from "../../utils/photos/artisians.jpg";

const InfrastructureItem2 = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(to right, rgba(211, 211, 211, 0.5), rgba(255, 255, 255, 0.8))",
        p: { xs: 4, md: 8 },
      }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              p: { xs: 2, md: 4 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h3"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#333" }}
            >
              Skilled Artisans and Designers{" "}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Our team of skilled artisans and designers is at the heart of
              Sutram Creations. With years of experience and a passion for their
              craft, our artisans bring traditional techniques and modern
              innovations together to create textiles that are true works of
              art.
            </Typography>
            <Typography variant="body1">
              Our designers continuously explore new trends and patterns to keep
              our collections fresh and stylish.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
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
              sx={{
                width: { xs: "100%", md: "90%" },
                maxHeight: { xs: 300, md: 400 },
                objectFit: "cover",
                borderRadius: 2,
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InfrastructureItem2;
