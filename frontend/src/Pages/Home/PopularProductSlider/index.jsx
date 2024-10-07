import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Navigation } from "swiper/modules";
import { Box } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";

export default function PopularProductSlider({ url, title }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(process.env.REACT_APP_BASE_API + url);
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
    <Link>
      <SwiperSlide className="mt-4.5" key={index}>
        <Box className="flex flex-col mt-16 px-20 justify-center items-center">
          {group.map((e, idx) => (
            <Box className="flex items-center gap-2 w-80 text-navTextColor">
              <img
                key={idx}
                className=" h-24 bg-white p-2 cursor-pointer "
                src={
                  process.env.REACT_APP_BASE_URL +
                  e?.attributes?.image?.data[0]?.attributes?.url
                }
                alt="#"
              />
              <p className="text-textButton font-bold text-xl">{e?.id}</p>

              <p
                className={`${
                  idx === 2 ? "" : "border-b"
                }  py-10 text-navTextSize h-25 `}
              >
                {e?.attributes?.name.length > 50
                  ? e?.attributes?.name.slice(0, 50) + "..."
                  : e?.attributes?.name}{" "}
              </p>
            </Box>
          ))}
        </Box>
      </SwiperSlide>
    </Link>
  ));

  return (
    <>
      <Box className="relative w-full ">
        <Box className="flex justify-center">
          <Box className="absolute pt-9 text-xl flex items-center gap-1">
            <p className="text-center" style={{ fontSize: "24px" }}>
              {title}
            </p>
            <WhatshotIcon
              sx={{
                fontSize: "25px",
                color: "gold",
              }}
            />
          </Box>
        </Box>
        <Box className="absolute flex w-full justify-end px-24.5 gap-99.5 mt-71  ">
          <Box className="bg-white z-10 cursor-pointer nextPopularProduct flex justify-center border w-10 rounded-full h-10">
            <KeyboardArrowLeftIcon className="mt-1.5 text-slate-400 hover:text-slate-700" />
          </Box>
          <Box className="bg-white z-10 cursor-pointer prevPopularProduct flex justify-center border w-10 rounded-full h-10">
            <KeyboardArrowRightIcon className="mt-1.5 text-slate-400 hover:text-slate-700" />
          </Box>
        </Box>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          navigation={{
            nextEl: ".nextPopularProduct",
            prevEl: ".prevPopularProduct",
          }}
          modules={[FreeMode, Navigation]}
          className="mySwiper rtl border relative rounded-2xl w-99.6 mt-3.5 "
        >
          {slides}
        </Swiper>
      </Box>
    </>
  );
}
