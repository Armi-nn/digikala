import { Box } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import React, { useEffect, useState } from "react";
import Logo from "../../assets/full-horizontal.png";
import image1 from "../../assets/express-delivery.png";
import image2 from "../../assets/cash-on-delivery.png";
import image3 from "../../assets/support.png";
import image4 from "../../assets/days-return.png";
import image5 from "../../assets/original-products.png";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Box className="border-t mt-12">
        <Box className="flex justify-between pt-8">
          <Box>
            {isVisible && (
              <button
                style={{
                  marginLeft: "20px ",
                }}
                className="border text-CoolerBtnFooter py-2 px-4 flex gap-2 rounded-lg"
                onClick={scrollToTop}
              >
                <KeyboardArrowUpIcon
                  sx={{
                    fontSize: "20px",
                  }}
                />
                <p className="text-navTextSize">بازگشت به بالا</p>
              </button>
            )}
          </Box>
          <Box className="flex flex-col gap-4">
            <Box className="flex justify-end">
              <img
                className="w-48 cursor-pointer mt-2 mr-6"
                src={Logo}
                alt="#"
              />
            </Box>
            <Box className="flex gap-3 pr-6 text-navTextSize text-navTextColor">
              <p>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
              <p className="border-l pl-3">۰۲۱-۹۱۰۰۰۱۰۰</p>
              <p className="border-l  pl-3">تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</p>
            </Box>
          </Box>
        </Box>
        <Box className="flex rtl justify-center gap-42 text-navTextSize text-navTextColor mt-12">
          <Box className="flex flex-col justify-center  items-center cursor-pointer">
            <img className="w-14" src={image1} alt="#" />
            <p>اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس</p>
          </Box>
          <Box className="flex flex-col justify-center items-center cursor-pointer">
            <img className="w-14" src={image2} alt="#" />
            <p>امکان پرداخت در محل</p>
          </Box>
          <Box className="flex flex-col justify-center items-center cursor-pointer">
            <img className="w-14" src={image3} alt="#" />
            <p>۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ</p>
          </Box>
          <Box className="flex flex-col justify-center items-center cursor-pointer">
            <img className="w-14" src={image4} alt="#" />
            <p>هفت روز ضمانت بازگشت کالا</p>
          </Box>
          <Box className="flex flex-col justify-center items-center cursor-pointer">
            <img className="w-14" src={image5} alt="#" />
            <p>ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ</p>
          </Box>
        </Box>
      </Box>
    </>
  );
}
