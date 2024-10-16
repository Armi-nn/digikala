import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper/modules";
import { Box } from "@mui/material";

import "./style.css";
export default function Home() {
  const [slideStory, setSlideStory] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          process.env.REACT_APP_BASE_API + "slider-stories?populate=*"
        );
        const data = await res.json();
        setSlideStory(data?.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  const item = slideStory?.map((e, index) => {
    return (
      <SwiperSlide key={index} className="cursor-pointer ">
        <Box>
          <Box className=" w-22 h-22 border-3 border-fuchsia-700 rounded-full flex justify-center">
            <img
              style={{
                marginTop: "-0.6px ",
              }}
              src={
                process.env.REACT_APP_BASE_URL +
                e?.attributes?.image?.data?.attributes?.url
              }
              alt="#"
              className="p-0.8 w-20 h-20 rounded-full "
            />
          </Box>
          <Box className=" mt-2.5 text-center text-xs lg:text-storyT text-sliderStoryTextColor">
            <p>{e?.attributes?.name}</p>
          </Box>
        </Box>
      </SwiperSlide>
    );
  });
  return (
    <>
      <Box className=" absolute hidden lg:flex justify-between px-24 w-full mt-17.5">
        <Box className=" bg-white ml-2 z-10 cursor-pointer nextStory flex justify-center border w-10 rounded-full h-10">
          <KeyboardArrowLeftIcon className="mt-1.5 text-slate-400 hover:text-slate-700" />
        </Box>
        <Box className="bg-white  z-10 cursor-pointer prevStory flex justify-center border w-10 rounded-full h-10">
          <KeyboardArrowRightIcon className="mt-1.5 text-slate-400 hover:text-slate-700" />
        </Box>
      </Box>
      <Swiper
        slidesPerView={3.5}
        breakpoints={{
          440: {
            slidesPerView: 4.5,
          },
          540: {
            slidesPerView: 5.5,
          },
          640: {
            slidesPerView: 6.5,
          },
          768: {
            slidesPerView: 7.5,
          },
          1024: {
            slidesPerView: 8.5,
          },
          1280: {
            slidesPerView: 11.5,
          },
        }}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".nextStory",
          prevEl: ".prevStory",
        }}
        modules={[FreeMode, Navigation]}
        className="mySwiper rtl responsive"
      >
        {item}
      </Swiper>
    </>
  );
}
