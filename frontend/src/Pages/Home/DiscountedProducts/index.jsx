import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function DiscountedProducts() {
  const [product, setProduct] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          process.env.REACT_APP_BASE_API + "discounted-products?populate=*"
        );
        const data = await res.json();
        setProduct(data?.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  const item = product?.map((e, index) => {
    return (
      <Box className="w-52" key={index}>
        <Box
          className={`${
            index === 5 || index === 11 || index === 17 ? "" : "border-l "
          } ${index >= 12 && index <= 15 ? "" : "border-b"} `}
        >
          <Box>
            <p>تومان</p>
            <p></p>
          </Box>
          <img
            src={
              process.env.REACT_APP_BASE_URL +
              e?.attributes?.image?.data?.attributes?.url
            }
            alt="#"
          />
        </Box>
      </Box>
    );
  });
  return (
    <>
      <Box className="flex w-99.6 flex-wrap justify-center ">{item}</Box>
    </>
  );
}
