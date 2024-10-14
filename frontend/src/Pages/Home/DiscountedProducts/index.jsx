import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

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
      <Link>
        <Box className="w-52" key={index}>
          <Box
            className={`${
              index === 5 || index === 11 || index === 17 ? "" : "border-l "
            } ${index > 12  ? "" : "border-b"}`}
          >
            <Box className="flex justify-center">
              <img
                className="w-36 mt-2"
                src={
                  process.env.REACT_APP_BASE_URL +
                  e?.attributes?.image?.data?.attributes?.url
                }
                alt="#"
              />
            </Box>
            <Box className="flex justify-between px-2 py-4 ">
              <Box className="bg-red-600 w-8 rounded-full h-5 text-center flex justify-center items-center text-white mt-1">
                <p style={{marginTop:'-5px'}}>{e?.attributes?.discount}</p>
              </Box>
              <Box className="">
                <Box className="flex items-center">
                  <Box className="flex text-lg text-TextColorPrice">
                    <p>{e?.attributes?.discountedPrice}</p>
                  </Box>
                  <Box className="text-sm ">
                    <p>تومان</p>
                  </Box>
                </Box>
                <Box className="">
                  <p className=" text-discountTextColor line-through ">
                    {e?.attributes?.price}
                  </p>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Link>
    );
  });
  return (
    <>
      <Box className="flex w-99.6 justify-center relative ">
        <Box className="mt-22 flex flex-wrap justify-center">{item}</Box>
        <Box className="absolute  text-xl flex items-center gap-1 ">
          <LocalOfferIcon
              sx={{
                fontSize: "25px",
                color: "red",
                marginTop:"12px"
              }}
            />
          <p className="text-center pt-2" style={{ fontSize: "24px" }}>
            منتخب محصولات تخفیف و حراج
          </p>
        </Box>
      </Box>
    </>
  );
}
