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
           <img
            src={
              process.env.REACT_APP_BASE_URL +
              e?.attributes?.image?.data?.attributes?.url
            }
            alt="#"
          />
          {/* <Box className="flex items-center juss">
            {e?.attributes?.discount&&
            <Box className="bg-red-600 w-8 rounded-full h-5 text-center flex justify-center items-center text-white mt-2">
              <p
              >
                {e?.attributes?.discount}
              </p>
            </Box>
          }
            <Box className="flex">
              <p>{e?.attributes?.discountedPrice}</p>
              <p>تومان</p>
            </Box>
          </Box> */}
           <Box className="flex justify-between px-5 ">
                <Box className="bg-red-600 w-8 rounded-full h-5 text-center flex justify-center items-center text-white mt-1">
                  <p
                  >
                    {e?.attributes?.discount}
                  </p>
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
    );
  });
  return (
    <>
      <Box className="flex w-99.6 flex-wrap justify-center ">{item}</Box>
    </>
  );
}
