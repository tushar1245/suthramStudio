// import React, { useEffect, useRef, useState } from "react";
// import { Box, Grid, Stack, Typography } from "@mui/material";
// import img from "../../utils/photos/img1.jpg";
// import Collection from "./Collection";

// const TypesOfProduct = ({ details, index }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     // Observer to detect when the component is in the viewport
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(true);
//           } else {
//             setIsVisible(false);
//           }
//         });
//       },
//       {
//         threshold: 0.5,
//       }
//     );

//     // Observe the component
//     observer.observe(document.querySelector(".types-of-product"));

//     // Cleanup
//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <>
//       <Box
//         className="types-of-product"
//         sx={{
//           // background: "rgba(255, 253, 208, 1)",
//           minHeight: "80vh", // Set a minimum height to ensure content visibility
//           display: "flex",
//           alignItems: "center",
//         }}
//       >
//         <Grid container sx={{ alignItems: "center" }}>
//           <Grid item xs={12} sm={12} md={5} sx={{ p: 4 }}>
//             <Stack
//               direction="column"
//               spacing={5}
//               sx={{
//                 opacity: isVisible ? 1 : 0, // Initially hidden
//                 animation: isVisible
//                   ? "fade-up 1s ease-in-out forwards"
//                   : "none",
//               }}
//             >
//               <Typography
//                 variant="h3"
//                 gutterBottom
//                 sx={{ fontWeight: "bold", color: "#333" }}
//               >
//                 {details.name}
//               </Typography>
//               <Typography
//                 gutterBottom
//                 sx={{
//                   fontSize: 20,
//                 }}
//               >
//                 {details.details}
//               </Typography>
//             </Stack>
//           </Grid>
//           <Grid
//             item
//             xs={12}
//             sm={12}
//             md={7}
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               opacity: isVisible ? 1 : 0,
//               animation: isVisible
//                 ? "fade-right 1s ease-in-out forwards"
//                 : "none",
//             }}
//           >
//             <Box
//               component="img"
//               src={details.mainImg}
//               alt="Image Description"
//               sx={{
//                 width: "70%",
//                 height: "auto",
//                 transform: "rotate(3deg)",
//                 transformOrigin: "bottom right",
//               }}
//             />
//           </Grid>
//         </Grid>
//       </Box>

//       <style>
//         {`
//           @keyframes fade-up {
//             from {
//               opacity: 0;
//               transform: translateY(20px);
//             }
//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }

//           @keyframes fade-right {
//             from {
//               opacity: 0;
//               transform: translateX(-20px);
//             }
//             to {
//               opacity: 1;
//               transform: translateX(0);
//             }
//           }
//         `}
//       </style>
//       {/* <Collection productDetails={productDetails} /> */}
//     </>
//   );
// };

// export default TypesOfProduct;

import React, { useEffect, useState } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Collection from "./Collection";

const TypesOfProduct = ({ details, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const uniqueClassName = `types-of-product-${index}`;

  useEffect(() => {
    // Observer to detect when the component is in the viewport
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
    const element = document.querySelector(`.${uniqueClassName}`);
    if (element) {
      observer.observe(element);
    }

    // Cleanup
    return () => {
      if (element) {
        observer.unobserve(element);
      }
      observer.disconnect();
    };
  }, [uniqueClassName]);

  return (
    <>
      <Box
        className={uniqueClassName}
        sx={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          flexGrow: 1,
          background:
            index % 2 === 1
              ? "linear-gradient(to right, rgba(211, 211, 211, 0.5), rgba(255, 255, 255, 0.8))"
              : "#fff",
        }}
      >
        <Grid container sx={{ alignItems: "center" }}>
          <Grid item xs={12} sm={12} md={5} sx={{ p: 4 }}>
            <Stack
              direction="column"
              spacing={5}
              sx={{
                opacity: isVisible ? 1 : 0,
                animation: isVisible
                  ? "fade-up 1s ease-in-out forwards"
                  : "none",
              }}
            >
              <Typography
                variant="h3"
                gutterBottom
                sx={{ fontWeight: "bold", color: "#333" }}
              >
                {details.name}
              </Typography>
              <Typography
                gutterBottom
                sx={{
                  fontSize: 20,
                }}
              >
                {details.details}
              </Typography>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={7}
            sx={{
              display: "flex",
              justifyContent: "center",
              opacity: isVisible ? 1 : 0,
              animation: isVisible
                ? "fade-right 1s ease-in-out forwards"
                : "none",
            }}
          >
            <Box
              component="img"
              src={details.mainImg}
              alt="Image Description"
              sx={{
                width: "50%",
                height: "auto",
                transform: "rotate(3deg)",
                transformOrigin: "bottom right",
              }}
            />
          </Grid>
        </Grid>
      </Box>

      <style>
        {`
          @keyframes fade-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fade-right {
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
      <Collection
        details={details}
        uniqueClassName={uniqueClassName}
        index={index}
      />
    </>
  );
};

export default TypesOfProduct;
