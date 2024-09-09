import { Box, Grid, Typography } from "@mui/material";
import ProductTop from "./ProductTop";
import TypesOfProduct from "./TypesOfProduct";
// import img1 from "../../utils/photos/bathrug1.jpeg";
// import img2 from "../../utils/photos/bathrug2.jpeg";
// import img3 from "../../utils/photos/bathrug3.jpeg";
// import img4 from "../../utils/photos/bathrug4.jpeg";
// import img5 from "../../utils/photos/blanket1.jpeg";
// import img6 from "../../utils/photos/blanket2.jpeg";
// import img7 from "../../utils/photos/blanket3.jpeg";
// import img8 from "../../utils/photos/blanket4.jpeg";
// import img9 from "../../utils/photos/curtain1.jpeg";
// import img10 from "../../utils/photos/curtain2.jpeg";
// import img11 from "../../utils/photos/curtain3.jpeg";
// import img12 from "../../utils/photos/curtain4.jpeg";
// import img13 from "../../utils/photos/rugs1.jpeg";
// import img14 from "../../utils/photos/rugs2.jpeg";
// import img15 from "../../utils/photos/rugs3.jpeg";
// import img16 from "../../utils/photos/rugs4.jpeg";
// import img17 from "../../utils/photos/placemats1.jpeg";
// import img18 from "../../utils/photos/placemats2.jpeg";
// import img19 from "../../utils/photos/placemats3.jpeg";
// import img20 from "../../utils/photos/placemats4.jpeg";
// import img21 from "../../utils/photos/poufs1.jpeg";
// import img22 from "../../utils/photos/poufs2.jpeg";
// import img23 from "../../utils/photos/poufs3.jpeg";
// import img24 from "../../utils/photos/poufs4.jpeg";
// import img25 from "../../utils/photos/throws1.jpeg";
// import img26 from "../../utils/photos/throws2.jpeg";
// import img27 from "../../utils/photos/throws3.jpeg";
// import img28 from "../../utils/photos/throws4.jpeg";
// import img29 from "../../utils/photos/tableRunner1.jpeg";
// import img30 from "../../utils/photos/tableRunner2.jpeg";
// import img31 from "../../utils/photos/tableRunner3.jpeg";
// import img32 from "../../utils/photos/tableRunner4.jpeg";
// import img33 from "../../utils/photos/cushion1.jpeg";
// import img34 from "../../utils/photos/cushion2.jpeg";
// import img35 from "../../utils/photos/cushion3.jpeg";
// import img36 from "../../utils/photos/cushion4.jpeg";

import img1 from "../../utils/photos/1.jpeg";
import img2 from "../../utils/photos/2.jpeg";
import img3 from "../../utils/photos/3.jpeg";
import img4 from "../../utils/photos/4.jpeg";
import img5 from "../../utils/photos/5.jpg";
import img6 from "../../utils/photos/6.jpeg";
import img7 from "../../utils/photos/7.jpeg";
import img8 from "../../utils/photos/8.jpg";
import img9 from "../../utils/photos/9.jpeg";
import img10 from "../../utils/photos/10.jpeg";
import img11 from "../../utils/photos/11.jpg";
import img12 from "../../utils/photos/12.jpeg";
import img13 from "../../utils/photos/13.jpg";
import img14 from "../../utils/photos/14.jpeg";
import img15 from "../../utils/photos/15.jpeg";
import img16 from "../../utils/photos/16.jpg";
import img17 from "../../utils/photos/17.jpg";
import img18 from "../../utils/photos/18.jpeg";
import img19 from "../../utils/photos/19.jpeg";
import img20 from "../../utils/photos/20.jpeg";
import img21 from "../../utils/photos/21.jpeg";
import img22 from "../../utils/photos/22.jpeg";
import img23 from "../../utils/photos/23.jpg";
import img24 from "../../utils/photos/24.jpg";
import img25 from "../../utils/photos/25.jpg";
import img26 from "../../utils/photos/26.jpeg";
import img27 from "../../utils/photos/27.jpeg";
import img28 from "../../utils/photos/28.jpg";
import img29 from "../../utils/photos/29.jpg";
import img30 from "../../utils/photos/30.jpg";
import img31 from "../../utils/photos/31.jpg";
import img32 from "../../utils/photos/32.jpg";
import img33 from "../../utils/photos/33.jpeg";
import img34 from "../../utils/photos/34.jpeg";
import img35 from "../../utils/photos/35.jpg";
import img36 from "../../utils/photos/36.jpeg";
import img37 from "../../utils/photos/37.jpeg";
import img38 from "../../utils/photos/38.jpeg";
import img39 from "../../utils/photos/39.jpeg";
import img40 from "../../utils/photos/40.jpeg";
import img41 from "../../utils/photos/41.jpeg";
import img42 from "../../utils/photos/42.jpeg";
import img43 from "../../utils/photos/43.jpg";
import img44 from "../../utils/photos/44.jpeg";
import img45 from "../../utils/photos/45.jpeg";
import img46 from "../../utils/photos/46.jpg";
import img47 from "../../utils/photos/47.jpeg";
import img48 from "../../utils/photos/48.jpg";
import img49 from "../../utils/photos/49.jpeg";
import img50 from "../../utils/photos/50.jpeg";
import img51 from "../../utils/photos/51.jpg";
import img52 from "../../utils/photos/52.jpg";
import img53 from "../../utils/photos/53.jpg";
import img54 from "../../utils/photos/54.jpg";
import img55 from "../../utils/photos/55.jpg";
import img56 from "../../utils/photos/56.jpg";
import img57 from "../../utils/photos/57.jpg";
import img58 from "../../utils/photos/58.jpeg";
import img59 from "../../utils/photos/59.jpeg";
import img60 from "../../utils/photos/60.jpg";
import img61 from "../../utils/photos/61.jpg";
import img62 from "../../utils/photos/62.jpeg";
import img63 from "../../utils/photos/63.jpg";
import img64 from "../../utils/photos/64.jpg";
import img65 from "../../utils/photos/65.jpg";
import img66 from "../../utils/photos/66.jpeg";
import img67 from "../../utils/photos/67.jpeg";
import img68 from "../../utils/photos/68.jpg";
import img69 from "../../utils/photos/69.jpg";
import img70 from "../../utils/photos/70.jpeg";
import img71 from "../../utils/photos/71.png";
import img72 from "../../utils/photos/72.jpeg";
import img73 from "../../utils/photos/73.jpg";
import img74 from "../../utils/photos/74.jpeg";
import img75 from "../../utils/photos/75.jpg";
import img76 from "../../utils/photos/76.jpg";
import img77 from "../../utils/photos/77.jpeg";
import img78 from "../../utils/photos/78.jpeg";
import img79 from "../../utils/photos/79.jpeg";
import img80 from "../../utils/photos/80.jpg";
import img81 from "../../utils/photos/81.jpg";

import { useParams } from "react-router-dom";

// const productDetails = {
//   Rugs: {
//     titleText: "TRANSFORM YOUR SPACE WITH OUR STUNNING RUGS",
//     titleImage: img1,
//     details: [
//       {
//         name: "Chindi Rugs",
//         details:
//           " Embrace the vibrant and eco-friendly charm of our Chindi rugs. Handcrafted from recycled fabrics, these rugs are colorful, unique, and perfect for adding a touch of personality to any room",
//         mainImg: img2,
//         img1: img3,
//         img2: img4,
//         img3: img5,
//         img4: img6,
//       },
//       {
//         name: "Jute Braided Rugs",
//         details:
//           "Discover the natural beauty of our jute braided rugs. Durable and stylish, these rugs are ideal for adding a rustic, earthy feel to your home decor.",
//         mainImg: img7,
//         img1: img8,
//         img2: img9,
//         img3: img10,
//         img4: img11,
//       },
//       {
//         name: "Woven Rugs",
//         mainImg: img12,
//         details:
//           "Experience the intricate craftsmanship of our woven rugs. Available in a variety of patterns and colors, these rugs are designed to bring warmth and elegance to your living spaces.",
//         img1: img13,
//         img2: img14,
//         img3: img15,
//         img4: img16,
//       },
//       {
//         name: "Printed Rugs",
//         details:
//           "Add a splash of creativity with our printed rugs. Featuring contemporary and traditional designs, these rugs are perfect for making a bold statement in any room.",
//         mainImg: img17,
//         img1: img18,
//         img2: img19,
//         img3: img20,
//         img4: img21,
//       },
//     ],
//   },
//   Cushions: {
//     titleText: "Elevate Your Comfort with Our Luxurious Cushions",
//     details: [
//       {
//         name: "Designer Cushions",
//         details:
//           "Make a style statement with our designer cushions. Crafted with exquisite fabrics and detailed designs, these cushions add a touch of sophistication to your decor.",
//       },
//       {
//         name: "Macrame Cushions",
//         details:
//           "Enjoy the artisanal beauty of our macrame cushions. Hand-knotted with care, these cushions bring a bohemian flair to your space.",
//       },
//       {
//         name: "Printed Cushions",
//         details:
//           "Add a pop of color with our printed cushions. Available in a variety of vibrant patterns and motifs, these cushions are perfect for enlivening any room.",
//       },
//       {
//         name: "Woven Cushions",
//         details:
//           "Experience the timeless elegance of our woven cushions. Meticulously crafted, these cushions offer texture and style to enhance your home.",
//       },
//       {
//         name: "Tufted Cushions",
//         details:
//           "Indulge in the plush comfort of our tufted cushions. Featuring soft textures and unique designs, these cushions are ideal for creating a cozy, inviting atmosphere.",
//       },
//     ],
//   },
//   Bathrugs: {
//     titleText: "Luxury and Comfort for Your Bathroom",
//     details: [
//       {
//         name: "Bathrugs",
//         details:
//           "Step onto the softness of our bathrugs. Designed to absorb moisture and provide a plush feel underfoot, our bathrugs combine functionality with elegant design to enhance your bathroom experience.",
//       },
//     ],
//   },
//   Throws: {
//     titleText: "Cozy and Stylish Throws for Every Season",
//     details: [
//       {
//         name: "Throws",
//         details:
//           "Wrap yourself in the warmth and elegance of our throws. Perfect for draping over a sofa or bed, our throws come in a variety of fabrics and designs, offering both comfort and style for any room.",
//       },
//     ],
//   },
//   Blankets: {
//     titleText: "Premium Blankets for Ultimate Comfort",
//     details: [
//       {
//         name: "Cotton Waffle Weave Blankets",
//         details:
//           "Enjoy the lightweight warmth of our cotton waffle weave blankets. Perfect for year-round use, these blankets are breathable and stylish.",
//       },
//       {
//         name: "Rice Weave Cotton Blankets",
//         details:
//           "Add texture and warmth with our rice weave cotton blankets. Designed to provide a cozy feel, these blankets are perfect for snuggling up in any season.",
//       },
//       {
//         name: "Terry Blankets",
//         details:
//           "Indulge in the plush comfort of our terry blankets. Soft, absorbent, and luxurious, these blankets are ideal for adding a touch of luxury to your home.",
//       },
//     ],
//   },
//   Poufs: {
//     titleText: "Versatile and Stylish Poufs",
//     details: [
//       {
//         name: "Poufs",
//         details:
//           "Enhance your living space with our versatile poufs. Perfect for extra seating or as a footrest, our poufs are available in a variety of designs and fabrics to complement any decor.",
//       },
//     ],
//   },
//   TableRunner: {
//     titleText: "Elegant Table Runners for Every Occasion",
//     details: [
//       {
//         name: "TableRunner",
//         details:
//           "Add a touch of sophistication to your dining table with our elegant table runners. Available in various fabrics and designs, our table runners are perfect for both everyday use and special occasions.",
//       },
//     ],
//   },
//   Curtains: {
//     titleText: "Stylish Curtains to Transform Your Home",
//     details: [
//       {
//         name: "Curtains",
//         details:
//           "Elevate your home decor with our stylish curtains. Offering both functionality and design, our curtains are available in a range of fabrics and patterns to suit any room and enhance your living space.",
//       },
//     ],
//   },
//   Placemats: {
//     titleText: "Chic and Functional Placemats",
//     details: [
//       {
//         name: "Placemats",
//         details:
//           "Protect your table and add style to your dining experience with our chic placemats. Available in a variety of designs, our placemats are perfect for both casual and formal dining settings.",
//       },
//     ],
//   },
// };

const productDetails = {
  Rugs: {
    titleText: "TRANSFORM YOUR SPACE WITH OUR STUNNING RUGS",
    titleImage: img1,
    details: [
      {
        name: "Chindi Rugs",
        details:
          "Embrace the vibrant and eco-friendly charm of our Chindi rugs. Handcrafted from recycled fabrics, these rugs are colorful, unique, and perfect for adding a touch of personality to any room",
        mainImg: img2,
        img1: img3,
        img2: img4,
        img3: img5,
      },
      {
        name: "Jute Braided Rugs",
        details:
          "Discover the natural beauty of our jute braided rugs. Durable and stylish, these rugs are ideal for adding a rustic, earthy feel to your home decor.",
        mainImg: img6,
        img1: img7,
        img2: img8,
        img3: img9,
      },
      {
        name: "Woven Rugs",
        mainImg: img10,
        details:
          "Experience the intricate craftsmanship of our woven rugs. Available in a variety of patterns and colors, these rugs are designed to bring warmth and elegance to your living spaces.",
        img1: img11,
        img2: img12,
        img3: img13,
      },
      {
        name: "Printed Rugs",
        details:
          "Add a splash of creativity with our printed rugs. Featuring contemporary and traditional designs, these rugs are perfect for making a bold statement in any room.",
        mainImg: img14,
        img1: img15,
        img2: img16,
        img3: img17,
      },
    ],
  },
  Cushions: {
    titleText: "Elevate Your Comfort with Our Luxurious Cushions",
    titleImage: img18,
    details: [
      {
        name: "Designer Cushions",
        details:
          "Make a style statement with our designer cushions. Crafted with exquisite fabrics and detailed designs, these cushions add a touch of sophistication to your decor.",
        mainImg: img19,
        img1: img20,
        img2: img21,
        img3: img22,
      },
      {
        name: "Macrame Cushions",
        details:
          "Enjoy the artisanal beauty of our macrame cushions. Hand-knotted with care, these cushions bring a bohemian flair to your space.",
        mainImg: img23,
        img1: img24,
        img2: img25,
        img3: img26,
      },
      {
        name: "Printed Cushions",
        details:
          "Add a pop of color with our printed cushions. Available in a variety of vibrant patterns and motifs, these cushions are perfect for enlivening any room.",
        mainImg: img27,
        img1: img28,
        img2: img29,
        img3: img30,
      },
      {
        name: "Woven Cushions",
        details:
          "Experience the timeless elegance of our woven cushions. Meticulously crafted, these cushions offer texture and style to enhance your home.",
        mainImg: img31,
        img1: img32,
        img2: img33,
        img3: img34,
      },
      {
        name: "Tufted Cushions",
        details:
          "Indulge in the plush comfort of our tufted cushions. Featuring soft textures and unique designs, these cushions are ideal for creating a cozy, inviting atmosphere.",
        mainImg: img35,
        img1: img36,
        img2: img37,
        img3: img38,
      },
    ],
  },
  Bathrugs: {
    titleText: "Luxury and Comfort for Your Bathroom",
    titleImage: img39,
    details: [
      {
        name: "Bathrugs",
        details:
          "Step onto the softness of our bathrugs. Designed to absorb moisture and provide a plush feel underfoot, our bathrugs combine functionality with elegant design to enhance your bathroom experience.",
        mainImg: img40,
        img1: img41,
        img2: img42,
        img3: img43,
      },
    ],
  },
  Throws: {
    titleText: "Cozy and Stylish Throws for Every Season",
    titleImage: img44,
    details: [
      {
        name: "Throws",
        details:
          "Wrap yourself in the warmth and elegance of our throws. Perfect for draping over a sofa or bed, our throws come in a variety of fabrics and designs, offering both comfort and style for any room.",
        mainImg: img45,
        img1: img46,
        img2: img47,
        img3: img48,
      },
    ],
  },
  Blankets: {
    titleText: "Premium Blankets for Ultimate Comfort",
    titleImage: img49,
    details: [
      {
        name: "Cotton Waffle Weave Blankets",
        details:
          "Enjoy the lightweight warmth of our cotton waffle weave blankets. Perfect for year-round use, these blankets are breathable and stylish.",
        mainImg: img50,
        img1: img51,
        img2: img52,
        img3: img53,
      },
      {
        name: "Rice Weave Cotton Blankets",
        details:
          "Add texture and warmth with our rice weave cotton blankets. Designed to provide a cozy feel, these blankets are perfect for snuggling up in any season.",
        mainImg: img54,
        img1: img55,
        img2: img56,
        img3: img57,
      },
      {
        name: "Terry Blankets",
        details:
          "Indulge in the plush comfort of our terry blankets. Soft, absorbent, and luxurious, these blankets are ideal for adding a touch of luxury to your home.",
        mainImg: img58,
        img1: img59,
        img2: img60,
        img3: img61,
      },
    ],
  },
  Poufs: {
    titleText: "Versatile and Stylish Poufs",
    titleImage: img62,
    details: [
      {
        name: "Poufs",
        details:
          "Enhance your living space with our versatile poufs. Perfect for extra seating or as a footrest, our poufs are available in a variety of designs and fabrics to complement any decor.",
        mainImg: img63,
        img1: img64,
        img2: img65,
        img3: img66,
      },
    ],
  },
  TableRunner: {
    titleText: "Elegant Table Runners for Every Occasion",
    titleImage: img67,
    details: [
      {
        name: "TableRunner",
        details:
          "Add a touch of sophistication to your dining table with our elegant table runners. Available in various fabrics and designs, our table runners are perfect for both everyday use and special occasions.",
        mainImg: img68,
        img1: img69,
        img2: img70,
        img3: img71,
      },
    ],
  },
  Curtains: {
    titleText: "Stylish Curtains to Transform Your Home",
    titleImage: img72,
    details: [
      {
        name: "Curtains",
        details:
          "Elevate your home decor with our stylish curtains. Offering both functionality and design, our curtains are available in a range of fabrics and patterns to suit any room and enhance your living space.",
        mainImg: img73,
        img1: img74,
        img2: img75,
        img3: img76,
      },
    ],
  },
  Placemats: {
    titleText: "Chic and Functional Placemats",
    titleImage: img77,
    details: [
      {
        name: "Placemats",
        details:
          "Protect your table and add style to your dining experience with our chic placemats. Available in a variety of designs, our placemats are perfect for both casual and formal dining settings.",
        mainImg: img78,
        img1: img79,
        img2: img80,
        img3: img81,
      },
    ],
  },
};

const Product = ({}) => {
  const { name } = useParams();
  return (
    <>
      <ProductTop productDetails={productDetails[name]} />
      {productDetails[name].details.map((item, index) => (
        <TypesOfProduct details={item} index={index} key={item.name} />
      ))}
    </>
  );
};

export default Product;
