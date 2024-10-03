import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import WhatshotIcon from '@mui/icons-material/Whatshot';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Navigation } from "swiper/modules";
import { Box } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function PopularProductSlider({url,title}) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          process.env.REACT_APP_BASE_API + url
        );
        const data = await res.json();
        setProduct(data?.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const groupProducts = (products, groupSize) => {
    let result = [];
    for (let i = 0; i < products.length; i += groupSize) {
      result.push(products.slice(i, i + groupSize));
    }
    return result;
  };

  const groupedProducts = groupProducts(product, 3);

  const slides = groupedProducts.map((group, index) => (
    <SwiperSlide className="mt-32" key={index}>
      <Box className="flex flex-col items-center gap-4">
        {group.map((e, idx) => (
          <Box className="flex gap-5 w-95 text-navTextSize text-navTextColor">
            <img
              key={idx}
              className=" h-32 bg-white p-2 cursor-pointer object-contain"
              src={
                  process.env.REACT_APP_BASE_URL +
                  e?.attributes?.image?.data[0]?.attributes?.url
                }
                alt="#"
                />
                <p>{e?.id}</p>
                <p>{e?.attributes?.name.length>63 ?e?.attributes?.name.slice(0,63)+"...": e?.attributes?.name}  </p>

                
          </Box>
        ))}
      </Box>
    </SwiperSlide>
  ));

  return (
    <>
      <Box className="relative w-full">
        <Box className="flex justify-center">
          <Box className="absolute mt-8 text-xl flex items-center gap-1">
            <p>
                {title}
            </p>
            <WhatshotIcon
              sx={{
                fontSize: "20px",
                color: "gold",
              }}
            />
          </Box>
        </Box>
        <Box className="absolute flex w-full justify-end px-24.5 gap-99.5 mt-28">
          <Box className="bg-white z-10 cursor-pointer nextBrand flex justify-center border w-10 rounded-full h-10">
            <KeyboardArrowLeftIcon className="mt-1.5 text-slate-400 hover:text-slate-700" />
          </Box>
          <Box className="bg-white z-10 cursor-pointer prevBrand flex justify-center border w-10 rounded-full h-10">
            <KeyboardArrowRightIcon className="mt-1.5 text-slate-400 hover:text-slate-700" />
          </Box>
        </Box>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          navigation={{
            nextEl: ".nextBrand",
            prevEl: ".prevBrand",
          }}
          modules={[FreeMode, Navigation]}
          className="mySwiper rtl border relative rounded-2xl w-full"
        >
          {slides}
        </Swiper>
      </Box>
    </>
  );
}
