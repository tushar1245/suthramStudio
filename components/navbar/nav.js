// import React, { useState, useEffect } from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
// import MenuItem from "@mui/material/MenuItem";
// import { useNavigate } from "react-router-dom";
// import logo from "../../utils/photos/llll.png";
// import logo1 from "../../utils/photos/sutramlogo.png";
// import logo2 from "../../utils/photos/logo.png";

// const pages = ["Home", "Products", "Infrastructure", "About Us"];
// const productsMenu = [
//   "Bathrugs",
//   "Blankets",
//   "Curtains",
//   "Poufs",
//   "Rugs",
//   "TableRunner",
//   "Throws",
//   "Placemats",
//   "Cushions",
// ];

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [anchorElProduct, setAnchorElProduct] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.pageYOffset;
//       setIsScrolled(scrollPosition > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const handleOpenProductMenu = (event) => {
//     setAnchorElProduct(event.currentTarget);
//   };

//   const handleCloseProductMenu = () => {
//     setAnchorElProduct(null);
//   };

//   const handleProductClick = (product) => {
//     setAnchorElProduct(null);
//     navigate(`/product/${product}`);
//   };

//   const handleNavItemClick = (page) => {
//     setAnchorElProduct(null);
//     if (page === "Home") {
//       navigate(`/`);
//     } else if (page === "About Us") {
//       navigate(`/about`);
//     } else if (page === "Infrastructure") {
//       navigate(`/infrastructure`);
//     }
//   };

//   return (
//     <AppBar
//       position={isScrolled ? "sticky" : "absolute"}
//       sx={{
//         top: 0,
//         zIndex: 1000,
//         background: isScrolled ? "#363636    " : "transparent",
//         boxShadow: isScrolled ? "0px 2px 4px -1px rgba(0,0,0,0.2)" : "none",
//         borderBottom: isScrolled ? "1px solid rgba(0,0,0,0.12)" : "none",
//         color: isScrolled ? "black" : "#FFF8B8 ",
//       }}
//     >
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Box
//             component="img"
//             src={logo}
//             alt="SC"
//             sx={{
//               width: !isScrolled ? "10%" : "6%",
//             }}
//           />
//           {!isScrolled && (
//             <Box
//               component="img"
//               src={logo1}
//               alt="SC"
//               sx={{
//                 width: "25%",
//               }}
//             />
//           )}
//           {isScrolled && (
//             <Typography
//               component="a"
//               href="/"
//               sx={{
//                 mr: 2,
//                 display: { xs: "none", md: "flex" },
//                 fontWeight: 600,
//                 letterSpacing: ".3rem",
//                 color: "inherit",
//                 textDecoration: "none",
//                 color: "#FFF8B8",
//                 fontSize: 35,
//               }}
//             >
//               Sutram Creations
//             </Typography>
//           )}

//           <Box
//             sx={{
//               flexGrow: 1,
//               display: { xs: "none", md: "flex" },
//               justifyContent: "flex-end",
//             }}
//           >
//             {pages.map((page) =>
//               page === "Products" ? (
//                 <Box
//                   key={page}
//                   sx={{ position: "relative" }}
//                   onMouseEnter={handleOpenProductMenu}
//                   onMouseLeave={handleCloseProductMenu}
//                 >
//                   <Button
//                     aria-controls="products-menu"
//                     aria-haspopup="true"
//                     sx={{
//                       my: 2,
//                       display: "block",
//                       fontWeight: 600,
//                       color: "#FFF8B8 ",
//                     }}
//                   >
//                     {page}
//                   </Button>
//                   <Menu
//                     id="products-menu"
//                     anchorEl={anchorElProduct}
//                     open={Boolean(anchorElProduct)}
//                     onClose={handleCloseProductMenu}
//                     MenuListProps={{ onMouseLeave: handleCloseProductMenu }}
//                   >
//                     {productsMenu.map((product) => (
//                       <MenuItem
//                         key={product}
//                         onClick={() => handleProductClick(product)}
//                       >
//                         {product}
//                       </MenuItem>
//                     ))}
//                   </Menu>
//                 </Box>
//               ) : (
//                 <Button
//                   key={page}
//                   onClick={() => handleNavItemClick(page)}
//                   sx={{
//                     my: 2,
//                     display: "block",
//                     fontWeight: 600,
//                     color: "#FFF8B8 ",
//                   }}
//                 >
//                   {page}
//                 </Button>
//               )
//             )}
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../utils/photos/llll.png";
import logo1 from "../../utils/photos/sutramlogo.png";
import logo2 from "../../utils/photos/logo.png";

const pages = ["Home", "Products", "Infrastructure", "About Us"];
const productsMenu = [
  "Bathrugs",
  "Blankets",
  "Curtains",
  "Poufs",
  "Rugs",
  "TableRunner",
  "Throws",
  "Placemats",
  "Cushions",
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [anchorElProduct, setAnchorElProduct] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openProducts, setOpenProducts] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpenProductMenu = (event) => {
    setAnchorElProduct(event.currentTarget);
  };

  const handleCloseProductMenu = () => {
    setAnchorElProduct(null);
  };

  const handleProductClick = (product) => {
    setAnchorElProduct(null);
    navigate(`/product/${product}`);
  };

  const handleNavItemClick = (page) => {
    setAnchorElProduct(null);
    setMobileMenuOpen(false);
    setOpenProducts(false);
    if (page === "Home") {
      navigate(`/`);
    } else if (page === "About Us") {
      navigate(`/about`);
    } else if (page === "Infrastructure") {
      navigate(`/infrastructure`);
    }
  };

  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(true);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  const handleProductsClick = () => {
    setOpenProducts(!openProducts);
  };

  const renderMobileMenu = (
    <Drawer
      anchor="right"
      open={mobileMenuOpen}
      onClose={handleMobileMenuClose}
      sx={{ display: { xs: "block", md: "none" } }}
    >
      <Box sx={{ width: 250 }} role="presentation">
        <List>
          <ListItem button onClick={handleProductsClick}>
            <ListItemText primary="Products" />
            {openProducts ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openProducts} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {productsMenu.map((product) => (
                <ListItem
                  button
                  key={product}
                  onClick={() => handleProductClick(product)}
                >
                  <ListItemText inset primary={product} />
                </ListItem>
              ))}
            </List>
          </Collapse>
          {pages
            .filter((page) => page !== "Products")
            .map((page) => (
              <ListItem
                button
                key={page}
                onClick={() => handleNavItemClick(page)}
              >
                <ListItemText primary={page} />
              </ListItem>
            ))}
        </List>
      </Box>
    </Drawer>
  );

  const [isNavSticky, setIsNavSticky] = useState(true);

  useEffect(() => {
    const isRootRoute = location.pathname === "/";
    if (isRootRoute) {
      setIsNavSticky(false);
    } else {
      setIsNavSticky(true);
    }
  }, [location]);

  return (
    <AppBar
      // position={isScrolled ? "sticky" : "absolute"}
      position={isNavSticky ? "sticky" : isScrolled ? "sticky" : "absolute"}
      sx={{
        top: 0,
        zIndex: 1000,
        background: !isNavSticky && !isScrolled ? "transparent" : "#363636",
        boxShadow: isScrolled ? "0px 2px 4px -1px rgba(0,0,0,0.2)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(0,0,0,0.12)" : "none",
        color: isScrolled ? "black" : "#FFF8B8",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            src={logo}
            alt="SC"
            sx={{
              width: !isNavSticky && !isScrolled ? "10%" : "6%",
            }}
          />
          {/* {!isScrolled && ( */}
          <Box
            component="img"
            src={logo1}
            alt="SC"
            sx={{
              width: "21%",
            }}
          />
          {/* )} */}
          {/* {isScrolled && (
            <Typography
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 600,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                color: "#FFF8B8",
                fontSize: 35,
              }}
            >
              Sutram Creations
            </Typography>
          )} */}

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="open mobile menu"
              aria-controls="mobile-menu"
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) =>
              page === "Products" ? (
                <Box
                  key={page}
                  sx={{ position: "relative" }}
                  onMouseEnter={handleOpenProductMenu}
                  onMouseLeave={handleCloseProductMenu}
                >
                  <Button
                    aria-controls="products-menu"
                    aria-haspopup="true"
                    sx={{
                      my: 2,
                      display: "block",
                      fontWeight: 600,
                      color: "#FFF8B8",
                    }}
                  >
                    {page}
                  </Button>
                  <Menu
                    id="products-menu"
                    anchorEl={anchorElProduct}
                    open={Boolean(anchorElProduct)}
                    onClose={handleCloseProductMenu}
                    MenuListProps={{ onMouseLeave: handleCloseProductMenu }}
                  >
                    {productsMenu.map((product) => (
                      <MenuItem
                        key={product}
                        onClick={() => handleProductClick(product)}
                      >
                        {product}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ) : (
                <Button
                  key={page}
                  onClick={() => handleNavItemClick(page)}
                  sx={{
                    my: 2,
                    display: "block",
                    fontWeight: 600,
                    color: "#FFF8B8",
                  }}
                >
                  {page}
                </Button>
              )
            )}
          </Box>
        </Toolbar>
      </Container>
      {renderMobileMenu}
    </AppBar>
  );
};

export default Navbar;
