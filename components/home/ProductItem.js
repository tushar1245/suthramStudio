import React from "react";
import { Box, Typography } from "@mui/material";

const ProductItem = ({ imgPath, text }) => {


  return (
    <Box
      sx={{
        position: "relative",
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        overflow: "hidden", // Ensure content is clipped to rounded corners
        transition: "transform 0.3s ease", // Add transform to transition for zoom effect
        "&:hover": {
          cursor: "pointer", // Change cursor to pointer on hover
          transform: "scale(1.05)", // Zoom in effect
        },
        "&:hover .overlay": {
          opacity: 1, // Show overlay on hover
        },
      }}
    >
      <Box
        component="img"
        src={imgPath}
        alt="Image Description"
        sx={{
          width: "100%",
          height: "auto",
        }}
      />
      <Box
        className="overlay"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(18, 128, 121, 0.3)", // Greyish transparent background
          opacity: 0, // Initially invisible
          transition: "opacity 0.3s ease", // Smooth transition
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark transparent background
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
          p: 1,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            // backgroundColor: "rgba(0, 0, 0, 0.5)",
            p: 1,
            borderRadius: "12px",
            color: "white",
            width: "fit-content",
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductItem;
