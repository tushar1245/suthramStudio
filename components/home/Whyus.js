import { Box, Grid, Typography } from "@mui/material";
import WhyUsItem from "./WhyUsItem";
import icon1 from "../../utils/photos/quality.png";
import icon2 from "../../utils/photos/heritage.png";
import icon3 from "../../utils/photos/collection.png";

const myArray = [
  {
    heading: "Heritage and Innovation",
    bodyText:
      "At SUTRAM CREATIONS, we blend rich textile heritage of artistry with modern innovation to craft timeless yet contemporary products.",
    img: icon2,
  },
  {
    heading: "Exceptional Quality",
    bodyText:
      "Our commitment to using the finest materials and expert craftsmanship ensures that every textile we offer is of the highest standard.",
    img: icon1,
  },
  {
    heading: "Versatile Collections",
    bodyText:
      "Whether you’re looking for luxurious fabrics, elegant garments, or stylish home textiles, our diverse range caters to all your needs.",
    img: icon3,
  },
];

const WhyUs = () => {
  return (
    <Box sx={{ background: "rgba(211, 211, 211, 0.5) ", p: 5 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 5,
        }}
      >
        <Box sx={{ position: "relative", display: "inline-block" }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: {
                xs: 25,
                sm: 30,
                md: 35,
                lg: 40,
              },
              position: "relative", // Ensure pseudo-element is positioned relative to this element
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: "25%", // Adjust the starting point
                width: "50%", // Span 30% of the width
                borderBottom: "4px solid red",
              },
              pb: 1,
            }}
          >
            Why Choose Us?
          </Typography>
        </Box>
      </Box>
      <Grid
        container
        spacing={8}
        sx={{
          p: 5,
          display: "flex",
          justifyContent: "center", // Center the grid horizontally
        }}
      >
        {myArray.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
            <WhyUsItem
              heading={item.heading}
              bodyText={item.bodyText}
              img={item.img}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyUs;
