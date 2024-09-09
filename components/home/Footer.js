import React from "react";
import { Box, Typography, Grid, Stack, Link } from "@mui/material";
import { styled } from "@mui/system";

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#2c2c2c",
  color: "white",
  padding: "40px 20px",
  position: "relative",
  overflow: "hidden",
}));

const PatternOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: `
      radial-gradient(circle, rgba(255, 255, 255, 0.5) 1px, transparent 1px),
      radial-gradient(circle, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
  backgroundSize: "20px 20px",
  backgroundPosition: "0 0, 10px 10px",
  opacity: 0.2,
  zIndex: 1,
}));

const Content = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: "20px",
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: "white",
  textDecoration: "none",
  display: "block",
  marginBottom: "10px",
  "&:hover": {
    textDecoration: "underline",
  },
}));

const Footer = () => {
  return (
    <FooterContainer component="footer">
      <PatternOverlay />
      <Grid container spacing={4} className={Content}>
        <Grid item xs={12} md={4}>
          <SectionTitle variant="h6">About Us</SectionTitle>
          <Typography variant="body2">
            Established with a vision to bring the finest textiles to discerning
            customers, Sutram Creations has become synonymous with quality and
            elegance in the textile industry.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack direction={"column"} alignItems={"center"}>
            <SectionTitle variant="h6">Products</SectionTitle>
            <Stack direction={"row"} spacing={4}>
              <Box>
                {/* <Link to={`/product/bathrugs}`}>Bathrugs</Link> */}

                <StyledLink href="#">Bathrugs</StyledLink>
                <StyledLink href="#">Blankets</StyledLink>
                <StyledLink href="#">Curtains </StyledLink>
                <StyledLink href="#">Poufs </StyledLink>
              </Box>
              <Box>
                <StyledLink href="#">TableRunner</StyledLink>
                <StyledLink href="#">Cushions</StyledLink>
                <StyledLink href="#">Placemats </StyledLink>
                <StyledLink href="#">Rugs </StyledLink>
              </Box>
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={12} md={4}>
          <SectionTitle variant="h6">Contact</SectionTitle>
          <Typography variant="body2">
            K11/17, Sector 83
            <br />
            Gurgaon-122004, Haryana, India
            <br />
            Email: info@sutramcreations.com
            <br />
            Phone: (+91) 9729767973
          </Typography>
        </Grid>
      </Grid>
    </FooterContainer>
  );
};

export default Footer;
