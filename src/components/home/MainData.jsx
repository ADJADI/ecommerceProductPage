import product1Big from "../../assets/images/image-product-1.jpg";
import product2Big from "../../assets/images/image-product-2.jpg";
import product3Big from "../../assets/images/image-product-3.jpg";
import product4Big from "../../assets/images/image-product-4.jpg";
import product1Small from "../../assets/images/image-product-1-thumbnail.jpg";
import product2Small from "../../assets/images/image-product-2-thumbnail.jpg";
import product3Small from "../../assets/images/image-product-3-thumbnail.jpg";
import product4Small from "../../assets/images/image-product-4-thumbnail.jpg";

const MainData = [
  {
    title: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer ",
    initialPrice: "250.00",
    discount: "50",
    smallScreenUrls: [
      product1Small,
      product2Small,
      product3Small,
      product4Small,
    ],
    bigScreenUrls: [product1Big, product2Big, product3Big, product4Big],
  },
];

export default MainData;
