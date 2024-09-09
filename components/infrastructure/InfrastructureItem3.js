import { Box, Grid, Typography } from "@mui/material";
import img1 from "../../utils/photos/people.png";

const InfrastructureItem3 = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(to right, rgba(211, 211, 211, 0.5), rgba(255, 255, 255, 0.8))",
      }}
    >
      <Grid container spacing={4} alignItems="center">
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
              State-of-the-Art Infrastructure for Exceptional Quality
            </Typography>
            <Typography variant="body1" gutterBottom>
              At Sutram Creations, we believe that excellence in textiles begins
              with a commitment to superior infrastructure. Our state-of-the-art
              facilities are designed to ensure the highest standards of
              quality, innovation, and sustainability in every product we
              create.
            </Typography>
            <Typography variant="body1">
              From sourcing the finest raw materials to employing advanced
              manufacturing techniques, our infrastructure is the backbone of
              our promise to deliver only the best.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InfrastructureItem3;
