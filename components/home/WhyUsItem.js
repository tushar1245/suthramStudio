import { Box, Grid, Typography } from "@mui/material";

const WhyUsItem = ({ heading, bodyText, gradient, img }) => {
  return (
    <Box
      sx={{
        p: 3,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "60px",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
        border: gradient ? "2px solid #002547" : "none",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "-50px",
          width: "100px",
          height: "100px",
          backgroundColor: "#fff",
          backgroundImage: gradient ? gradient : "#fff",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
        }}
      >
        {!gradient && (
          <Box
            component="img"
            src={img}
            alt="Image Description"
            sx={{
              width: "90%",

              borderRadius: "50%",
            }}
          />
        )}
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" align="center" sx={{ fontWeight: 550 }}>
            {heading}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" align="center">
            {bodyText}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyUsItem;
