// import React, { useEffect, useState, useRef } from "react";
// import { Box, Grid, Typography } from "@mui/material";
// import WhyUsItem from "../home/WhyUsItem";

// const myArray = [
//   {
//     heading: "Energy Efficiency",
//     bodyText:
//       "Utilizing energy-efficient machinery and renewable energy sources to reduce our carbon footprint.",
//     gradient: "linear-gradient(180deg,#A3B7C9, #527798, #003768)",
//   },
//   {
//     heading: "Water Conservation",
//     bodyText:
//       " Implementing water-saving technologies in our dyeing and finishing processes.",
//     gradient: "linear-gradient(180deg,#A3B7C9, #527798, #003768)",
//   },
//   {
//     heading: "Waste Reduction",
//     bodyText:
//       "Recycling and repurposing materials to minimize waste and promote a circular economy.",
//     gradient: "linear-gradient(180deg,#A3B7C9, #527798, #003768)",
//   },
// ];

// export const InfrastructureItem1 = () => {
//   const [visibleIndexes, setVisibleIndexes] = useState([]);

//   const gridRefs = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const index = Number(entry.target.dataset.index);
//           if (entry.isIntersecting) {
//             setVisibleIndexes((prev) => [...new Set([...prev, index])]);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     gridRefs.current.forEach((ref) => ref && observer.observe(ref));

//     return () => {
//       gridRefs.current.forEach((ref) => ref && observer.unobserve(ref));
//     };
//   }, []);

//   return (
//     <Box sx={{ background: "#CFE0F0" }}>
//       <Grid
//         container
//         spacing={8}
//         sx={{
//           p: 5,
//           display: "flex",
//           justifyContent: "center",
//         }}
//       >
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={12}
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//           }}
//         >
//           <Typography
//             sx={{
//               fontWeight: 600,
//               fontSize: {
//                 xs: 20,
//                 sm: 25,
//                 md: 30,
//                 lg: 30,
//               },
//               color: "#002547",
//             }}
//           >
//             Sustainable Practices{" "}
//           </Typography>
//         </Grid>
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           ms={12}
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             textAlign: "center",
//           }}
//         >
//           <Typography
//             sx={{
//               fontSize: 25,
//               color: "#002547",
//             }}
//           >
//             Sustainability is woven into the fabric of Sutram Creations. We are
//             dedicated to minimizing our environmental impact through sustainable
//             practices and eco-friendly production methods. Our efforts include:
//           </Typography>
//         </Grid>
//         {myArray.map((item, index) => (
//           <Grid
//             item
//             xs={12}
//             sm={6}
//             md={4}
//             lg={4}
//             key={index}
//             data-index={index}
//             ref={(el) => (gridRefs.current[index] = el)}
//             sx={{
//               opacity: visibleIndexes.includes(index) ? 1 : 0,
//               transform: visibleIndexes.includes(index)
//                 ? "translateY(0)"
//                 : "translateY(20px)",
//               transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
//               transitionDelay: `${index * 0.2}s`,
//               transitionDuration: "0.6s",
//               "&:hover": {
//                 transform: "scale(1.05)",
//               },
//             }}
//           >
//             <WhyUsItem
//               heading={item.heading}
//               bodyText={item.bodyText}
//               gradient={item.gradient}
//             />
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default InfrastructureItem1;

import React, { useEffect, useState, useRef } from "react";
import { Box, Grid, Typography } from "@mui/material";
import WhyUsItem from "../home/WhyUsItem";

const myArray = [
  {
    heading: "Energy Efficiency",
    bodyText:
      "Utilizing energy-efficient machinery and renewable energy sources to reduce our carbon footprint.",
    gradient: "linear-gradient(180deg,#A3B7C9, #527798, #003768)",
  },
  {
    heading: "Water Conservation",
    bodyText:
      " Implementing innovative water-saving technologies in our dyeing and finishing processes for enhanced efficiency",
    gradient: "linear-gradient(180deg,#A3B7C9, #527798, #003768)",
  },
  {
    heading: "Waste Reduction",
    bodyText:
      "Recycling and repurposing materials to minimize waste and promote a circular economy.",
    gradient: "linear-gradient(180deg,#A3B7C9, #527798, #003768)",
  },
];

export const InfrastructureItem1 = () => {
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  const gridRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisibleIndexes((prev) => [...new Set([...prev, index])]);
          } else {
            setVisibleIndexes((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      { threshold: 0.1 }
    );

    gridRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => {
      gridRefs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);

  return (
    <Box sx={{ background: "#CFE0F0" }}>
      <Grid
        container
        spacing={8}
        sx={{
          p: 5,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: {
                xs: 20,
                sm: 25,
                md: 30,
                lg: 30,
              },
              color: "#002547",
            }}
          >
            Sustainable Practices{" "}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          ms={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: 25,
              color: "#002547",
            }}
          >
            Sustainability is woven into the fabric of Sutram Creations. We are
            dedicated to minimizing our environmental impact through sustainable
            practices and eco-friendly production methods. Our efforts include:
          </Typography>
        </Grid>
        {myArray.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            key={index}
            data-index={index}
            ref={(el) => (gridRefs.current[index] = el)}
            sx={{
              opacity: visibleIndexes.includes(index) ? 1 : 0,
              transform: visibleIndexes.includes(index)
                ? "translateY(0)"
                : "translateY(90px)",
              transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
              transitionDelay: visibleIndexes.includes(index)
                ? `${index * 0.2}s`
                : "0s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <WhyUsItem
              heading={item.heading}
              bodyText={item.bodyText}
              gradient={item.gradient}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default InfrastructureItem1;
