import React, { useEffect, useRef, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import img from "../../utils/photos/img1.jpg";

const Collection = ({ details, uniqueClassName, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  const newClassName = `${uniqueClassName}-collection`;

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
        threshold: 0.5,
      }
    );

    // Observe the component
    observer.observe(document.querySelector(`.${newClassName}`));

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Box
        sx={{
          p: 5,
          borderBottom: "2px solid  black",
          background:
            index % 2 === 1
              ? "linear-gradient(to right, rgba(211, 211, 211, 0.5), rgba(255, 255, 255, 0.8))"
              : "#fff",
        }}
        className={newClassName}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{ marginBottom: 6, fontWeight: 600 }}
        >
          {`The ${details.name} Collection`}
        </Typography>
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              opacity: isVisible ? 1 : 0,
              animation: isVisible
                ? "fade-in-left 1s ease-in-out forwards"
                : "none",
            }}
          >
            <Box
              component="img"
              src={details.img1}
              alt="Chindi Rug"
              sx={{
                width: "100%",
                // borderRadius: 5,
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              opacity: isVisible ? 1 : 0,
              animation: isVisible
                ? "fade-in-left 1s ease-in-out forwards"
                : "none",
            }}
          >
            <Box
              component="img"
              src={details.img2}
              alt="Chindi Rug"
              sx={{
                width: "100%",
                // borderRadius: 5,
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              opacity: isVisible ? 1 : 0,
              animation: isVisible
                ? "fade-in-left 1s ease-in-out forwards"
                : "none",
            }}
          >
            <Box
              component="img"
              src={details.img3}
              alt="Chindi Rug"
              sx={{
                width: "100%",
                // borderRadius: 5,
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* CSS Keyframes */}
      <style>
        {`
          @keyframes fade-in-left {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </>
  );
};

export default Collection;
