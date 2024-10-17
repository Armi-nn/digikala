import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import imageDiscount from "../../../assets/Amazing.png";
import imageTitle from "../../../assets/Amazings.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Navigation } from "swiper/modules";
import { Box } from "@mui/material";
import Timer from "./Timer";

export default function ProductSlider() {
  const [product, setProduct] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          process.env.REACT_APP_BASE_API + "products?populate=*"
        );
        const data = await res.json();
        setProduct(data?.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  const slideProduct = product?.map((e, index) => {
    return (
      index <= 10 && (
        <SwiperSlide key={index} className={`cursor-pointer py-5 flex`}>
          <Box
            className={`bg-white cursor-pointer w-40 h-71 ${
              index === 0 ? "rounded-r-lg" : ""
            } mr-1 p-1 overflow-hidden`}
          >
            <img
              className="mt-0 object-contain mr-3"
              style={{
                width: "132px",
                height: "158px",
                marginTop: "-7px",
              }}
              src={
                process.env.REACT_APP_BASE_URL +
                e?.attributes?.iamge?.data[0]?.attributes?.url
              }
              alt="#"
            />
            <Box className="px-2 text-navTextSize">
              <Box className=" text-navTextColor">
                <p style={{ marginTop: "-4px" }}>
                  {e?.attributes?.name.length > 63
                    ? e?.attributes?.name.slice(0, 38) + "..."
                    : e?.attributes?.name}
                </p>
              </Box>
              <Box className="flex gap-4 mt-2 ">
                <Box className="bg-red-600 w-8 rounded-full h-5 text-center flex justify-center items-center text-white mt-2">
                  <p
                    style={{
                      marginTop: "-2px",
                    }}
                  >
                    {e?.attributes?.discount}
                  </p>
                </Box>
                <Box className="">
                  <Box className="flex items-center">
                    <Box className="flex text-xsPlus text-TextColorPrice">
                      <p>{e?.attributes?.discountedPrice}</p>
                    </Box>
                    <Box className="text-xs ">
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
        </SwiperSlide>
      )
    );
  });
  return (
    <>
      <Swiper
        // slidesPerView={8.2}
        breakpoints={{
          375: {
            slidesPerView: 5.2,
          },
          // 540: {
          //   slidesPerView: 3.5,
          // },
          // 640: {
          //   slidesPerView: 4.5,
          // },
          // 768: {
          //   slidesPerView: 5.2,
          // },
          1100: {
            slidesPerView: 6.2,
          },
          1280: {
            slidesPerView: 7.2,
          },
          1510: {
            slidesPerView: 8.2,
          },
        }}
        spaceBetween={0}
        freeMode={true}
        navigation={{
          nextEl: ".nextProduct",
          prevEl: ".prevProduct",
        }}
        modules={[FreeMode, Navigation]}
        className="mySwiper rtl bg-red-500 rounded-2xl h-73 "
      >
        <SwiperSlide className="">
          <Box className="pr-10 mt-4.5">
            <Box>
              <img className="w-24 h-24 mt-1" src={imageTitle} alt="#" />
            </Box>
            <Box>
              <Timer />
            </Box>
            <Box className="mt-2.5 mr-1">
              <img src={imageDiscount} alt="#" />
            </Box>
            <Box className="flex items-center text-white mt-3 mr-1.5">
              <p className="text-sm">مشاهده همه</p>
              <ArrowBackIosIcon
                className="mt-1"
                sx={{
                  fontSize: "10px",
                }}
              />
            </Box>
          </Box>
        </SwiperSlide>
        <Box>{slideProduct}</Box>
        <SwiperSlide className="">
          <Box>
            <Box className=" bg-white cursor-pointer border-2 w-40 h-71 rounded-l-lg mr-1 mt-5 flex  flex-col items-center gap-3">
              <Box
                className=" border-blue-400 border-2 rounded-full h-13 w-13 mt-20 flex justify-center items-center text-blue-400
              "
              >
                <ArrowBackIcon
                  sx={{
                    fontSize: "35px",
                  }}
                  className="  "
                />
              </Box>
              <p className="text-navTextColor">مشاهده همه </p>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
