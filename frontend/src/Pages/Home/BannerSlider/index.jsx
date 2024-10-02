import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Box } from "@mui/material";
import "./style.css"
export default function BannerSlider() {
  const [slideBanner, setSlideBanner] = useState();
  useEffect(() => {
    (async () => {
      try{
        const res = await fetch(
          process.env.REACT_APP_BASE_API + "slider-banners?populate=*"
        );
        const data = await res.json();
        setSlideBanner(data?.data);
      }catch(err){
        console.log(err)
      }
    })();
  }, []);
  const item = slideBanner?.map((e, index) => {
    return (
      <SwiperSlide className="cursor-pointer" key={index}>
        <img
          style={{ height: "400px", objectFit: "cover" }}
          src={
            process.env.REACT_APP_BASE_URL +
            e?.attributes?.image?.data?.attributes?.url
          }
          alt="#"
        />
      </SwiperSlide>
    );
  });
  return (
    <>
      <Box className="absolute flex w-full justify-end px-8 gap-2 mt-85">
        <Box className=" bg-white z-10 cursor-pointer nextBanner flex justify-center border w-10 rounded-full h-10">
          <KeyboardArrowLeftIcon className="mt-1.5 text-slate-400 hover:text-slate-700" />
        </Box>
        <Box className="bg-white z-10 cursor-pointer prevBanner flex justify-center border w-10 rounded-full h-10">
          <KeyboardArrowRightIcon className="mt-1.5 text-slate-400 hover:text-slate-700" />
        </Box>
      </Box>
      <Swiper
        style={{ marginTop: "24px" }}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".nextBanner",
          prevEl: ".prevBanner",
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rtl"
      >
        {item}
      </Swiper>
    </>
  );
}
