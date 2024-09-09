import { Box, Grid, Typography } from "@mui/material";
import img1 from "../../utils/photos/welcome.jpg";

const Welcome = () => {
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
              Welcome to SUTRAM CREATIONS
            </Typography>
            <Typography variant="body1" gutterBottom>
              Discover the essence of luxury and tradition with Sutram
              creations, a premier destination for exquisite textiles. Our
              dedication to craftsmanship and quality is evident in every piece
              we create, blending timeless techniques with modern aesthetics.
            </Typography>
            <Typography variant="body1">
              Explore our curated collections and transform your spaces with our
              exceptional textiles.
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

export default Welcome;
