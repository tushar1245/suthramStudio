import { Box, Grid, Typography } from "@mui/material";
import ProductItem from "./ProductItem";
import img1 from "../../utils/photos/img1.jpg";
import img2 from "../../utils/photos/bathrug.jpeg";
import img3 from "../../utils/photos/blanket.jpeg";
import img4 from "../../utils/photos/curtain.jpeg";
import img5 from "../../utils/photos/poufs.jpeg";
import img6 from "../../utils/photos/rugs.jpeg";
import img7 from "../../utils/photos/tableRunner.jpeg";
import img8 from "../../utils/photos/throw.jpeg";
import img9 from "../../utils/photos/placeMat.jpeg";
import img10 from "../../utils/photos/cushion.jpeg";
import { Link, useNavigate } from "react-router-dom";

const imageArray = [
  { img: img2, text: "Bathrugs" },
  { img: img3, text: "Blankets" },
  { img: img4, text: "Curtains" },
  { img: img5, text: "Poufs" },
  { img: img6, text: "Rugs" },
  { img: img7, text: "TableRunner" },
  { img: img8, text: "Throws" },
  { img: img9, text: "Placemats" },
  { img: img10, text: "Cushions" },
];

const Products = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          my: 2,
          py: 2,
        }}
      >
        <Box
          sx={{ flex: 1, borderBottom: "1px solid", borderColor: "grey.500" }}
        />
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#333",
            mx: 3,
            whiteSpace: "nowrap",
            mt: 1,
          }}
        >
          {"Our Products"}
        </Typography>
        <Box
          sx={{ flex: 1, borderBottom: "1px solid", borderColor: "grey.500" }}
        />
      </Box>
      <Grid
        container
        spacing={8}
        sx={{
          p: 4,
          //   background: "grey.500",
          //   boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
          //   borderRadius: "8px",
        }}
      >
        {imageArray.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
            <Link to={`/product/${item.text}`}>
              <ProductItem imgPath={item.img} text={item.text} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Products;
