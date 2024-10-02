import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Navigation } from "swiper/modules";
import { Box } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function BrandSlider() {
  const [product, setProduct] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          process.env.REACT_APP_BASE_API + "brands?populate=*"
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
      <SwiperSlide
        key={index}
        className="flex justify-center items-center mt-8.5"
      >
        <img
          className={`border-l mt-9 mb-6 h-32 bg-white  p-2 cursor-pointer object-contain`}
          src={
            process.env.REACT_APP_BASE_URL +
            e?.attributes?.image?.data[0]?.attributes?.url
          }
          alt="#"
        />
      </SwiperSlide>
    );
  });
  return (
    <>
      <Box className="relative w-full">
        <Box className="flex justify-center">
          <Box className="absolute mt-8 text-xl flex items-center gap-1">
            <p>محبوب ترین برند ها</p>
            <StarBorderIcon  sx={{
                fontSize:'20px',
                color:"gold"
            }}/>
          </Box>
        </Box>
        <Box className="absolute flex w-full justify-end px-24.5 gap-99.5 mt-28 ">
        <Box className=" bg-white z-10 cursor-pointer nextBrand flex justify-center border w-10 rounded-full h-10">
          <KeyboardArrowLeftIcon className="mt-1.5 text-slate-400 hover:text-slate-700" />
        </Box>
        <Box className="bg-white z-10 cursor-pointer prevBrand flex justify-center border w-10 rounded-full h-10">
          <KeyboardArrowRightIcon className="mt-1.5 text-slate-400 hover:text-slate-700" />
        </Box>
      </Box>
        <Swiper
          slidesPerView={9.5}
          freeMode={true} 
          navigation={{
            nextEl: ".nextBrand",
            prevEl: ".prevBrand",
          }}
          modules={[FreeMode,Navigation]}
          className="mySwiper rtl border  relative rounded-2xl w-99.6"
        >
          <Box>{item}</Box>
        </Swiper>
      </Box>
    </>
  );
}
