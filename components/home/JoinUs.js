import React, { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";

// Styles for the box
const boxStyle = {
  // background: "linear-gradient(135deg, #6a11cb, #2575fc)", // Blueish gradient
  padding: "30px",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  opacity: 0,
  transform: "translateY(20px)",
  transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
};

// Styles for the typography
const typographyStyle = {
  color: "white",
  textAlign: "center",
  opacity: 0,
  transform: "scale(0.9)",
  transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
};

// Keyframes for the animations
const keyframes = `
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes textFadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
`;

const JoinUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      if (boxRef.current) {
        observer.unobserve(boxRef.current);
      }
    };
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      {/* <div
        ref={boxRef}
        style={{
          ...boxStyle,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <Typography
          style={{
            ...typographyStyle,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "scale(1)" : "scale(0.9)",
          }}
          variant="h4"
        >
          Established with a vision to bring the finest textiles to discerning
          customers, Sutram Creations has become synonymous with quality and
          elegance in the textile industry.
        </Typography>
      </div> */}
      <Box
        ref={boxRef}
        sx={{
          ...boxStyle,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          maxWidth: 1000,
          margin: "0 auto",
          padding: 4,
          backgroundColor: "#f5f5f5",
          borderRadius: 2,
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          mb:3
        }}
      >
        <Typography
          variant="body1"
          component="p"
          sx={{
            ...typographyStyle,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "scale(1)" : "scale(0.9)",
            fontSize: 20,
            fontWeight: 600,
            color: "#333",
            fontStyle: "italic",
            lineHeight: 1.6,
            textAlign: "center",
            "&::before": {
              content: '"\\201C"',
              display: "inline-block",
              marginRight: "0.2em",
              verticalAlign: "-0.3em",
              fontSize: "1.5em",
              fontWeight: "bold",
              color: "#333",
            },
            "&::after": {
              content: '"\\201D"',
              display: "inline-block",
              marginLeft: "0.2em",
              verticalAlign: "-0.3em",
              fontSize: "1.5em",
              fontWeight: "bold",
              color: "#333",
            },
          }}
        >
          {
            "Established with a vision to bring the finest textiles to discerning customers, Sutram Creations has become synonymous with quality and elegance in the textile industry. "
          }
        </Typography>
      </Box>
    </>
  );
};

export default JoinUs;
