import React from "react";
import { Box, Typography } from "@mui/material";
import homeVideo from "../../utils/videos/sutramvideo.mp4";

const LandingVideo = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        height: {
          xs: "50vh",
          sm: "70vh",
          md: "80vh",
        },
      }}
      // height="80vh"
      position="relative"
    >
      <video
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          zIndex: -1,
        }}
      >
        <source src={homeVideo} type="video/mp4" />
      </video>
      {/* <Box
        component="img"
        src={logo}
        alt="SC"
        sx={{
          width: "20%",
        }}
      /> */}
      {/* <Typography variant="h2" color="primary">
        sutram
      </Typography> */}
    </Box>
  );
};

export default LandingVideo;
