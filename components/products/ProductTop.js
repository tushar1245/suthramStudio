import React, { useEffect, useRef, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";

const ProductTop = ({ productDetails }) => {
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <Box
      sx={{
        background:
          "linear-gradient(to right, rgba(211, 211, 211, 0.5), rgba(255, 255, 255, 0.8))",

        p: 8,
      }}
    >
      <Grid container sx={{ alignItems: "center" }}>
        <Grid item xs={12} sm={12} md={8}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={productDetails.titleImage}
              alt="Image Description"
              ref={imageRef}
              sx={{
                width: "70%",
                clipPath:
                  "polygon(10% 0%, 90% 0%, 85% 15%, 100% 35%, 80% 100%, 20% 100%, 0% 50%, 15% 20%)",
                opacity: 0,
                animation: isVisible
                  ? "fadeInLeft 1s ease-in-out forwards"
                  : "none",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Typography
            sx={{
              color: "#444",
              fontSize: 45,
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            {productDetails.titleText}
          </Typography>
        </Grid>
      </Grid>
      <style>
        {`
          @keyframes fadeInLeft {
            0% {
              opacity: 0.5;
              transform: translateX(-30%);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default ProductTop;
