import { Box } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import React, { useEffect, useState } from "react";
import Logo from "../../assets/full-horizontal.png";
import image1 from "../../assets/express-delivery.png";
import image2 from "../../assets/cash-on-delivery.png";
import image3 from "../../assets/support.png";
import image4 from "../../assets/days-return.png";
import image5 from "../../assets/original-products.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import digikalaApp from "../../assets/digikalaApp.png";
import rezi from "../../assets/rezi.png";
import kasbokar from "../../assets/kasbokar.png";
import notfound from "../../assets/notfound.png";
import digikalaBrand from "../../assets/digikalaBrand.png"

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
        <Box className="mt-12">
          <Box className="flex rtl justify-between px-6 text-navTextColor">
            <Box>
              <ul className="flex flex-col gap-4">
                <li className="text-lg text-black">با دیجی‌کالا</li>
                <li className="cursor-pointer">اتاق خبر دیجی‌کالا</li>
                <li className="cursor-pointer">فروش در دیجی‌کالا</li>
                <li className="cursor-pointer">فرصت‌های شغلی</li>
                <li className="cursor-pointer">گزارش تخلف در دیجی‌کالا</li>
                <li className="cursor-pointer">تماس با دیجی‌کالا</li>
                <li className="cursor-pointer">درباره دیجی‌کالا</li>
              </ul>
            </Box>
            <Box>
              <ul className="flex flex-col gap-4">
                <li className="text-lg text-black">خدمات مشتریان</li>
                <li className="cursor-pointer">پاسخ به پرسش‌های متداول</li>
                <li className="cursor-pointer">رویه‌های بازگرداندن کالا</li>
                <li className="cursor-pointer">شرایط استفاده</li>
                <li className="cursor-pointer">حریم خصوصی</li>
                <li className="cursor-pointer">گزارش باگ</li>
              </ul>
            </Box>
            <Box>
              <ul className="flex flex-col gap-4">
                <li className="text-lg text-black">
                  راهنمای خرید از دیجی‌کالا
                </li>
                <li className="cursor-pointer">نحوه ثبت سفارش</li>
                <li className="cursor-pointer">رویه ارسال سفارش</li>
                <li className="cursor-pointer">شیوه‌های پرداخت</li>
              </ul>
            </Box>
            <Box className="flex flex-col gap-4">
              <p className="text-lg text-black">همراه ما باشید!</p>
              <Box className="flex gap-8">
                <InstagramIcon sx={{ fontSize: "35px", color: "#62666d" }} />
                <TwitterIcon sx={{ fontSize: "35px", color: "#62666d" }} />
                <LinkedInIcon sx={{ fontSize: "35px", color: "#62666d" }} />
                <GroupWorkIcon sx={{ fontSize: "35px", color: "#62666d" }} />
              </Box>
              <p className="text-lg text-black mt-5">
                با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید
              </p>
              <Box>
                <Box className="flex gap-2">
                  <input
                    className="border py-2 px-8 rounded-lg "
                    style={{ background: "#F0F0F1" }}
                    type="email"
                    placeholder="ایمیل شما"
                    name=""
                    id=""
                  />
                  <button
                    className="border py-2 px-4 rounded-lg "
                    style={{ background: "#F0F0F1" }}
                  >
                    ثبت{" "}
                  </button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="flex justify-center mt-11">
          <img style={{ width: "97vw" }} src={digikalaApp} alt="#" />
        </Box>
        <Box className="border-t border-b mt-5 rtl flex justify-between mx-5 pb-10">
          <Box className="text-navTextColor text-navTextSize flex flex-col justify-center">
            <p className="text-2xl ">
              فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلای
            </p>
            <p>
              یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی
              متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمان ی کوتاه به دست
              مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛
            </p>
            <p>
              ویژگی‌هایی که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار
              کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد.
            </p>
            <p>
              یکی از مهم‌ترین دغدغه‌های کاربران دیجی‌کالا یا هر فروشگاه‌
              اینترنتی دیگری، این است که کالای خریداری شده چه زمانی به دستشان
              می‌رسد. دیجی‌کالا شیوه‌های مختلفی از ارسال را متناسب با فروشنده
              کالا،‌ مقصد کالا
            </p>
          </Box>
          <Box className="flex gap-2">
            <Box className="border rounded-lg p-3.5  flex justify-center mt-5">
              <img src={rezi} className="w-20 object-contain " alt="#" />
            </Box>
            <Box className="border rounded-lg p-3.5  flex justify-center mt-5">
              <img src={kasbokar} className="w-20 object-contain " alt="#" />
            </Box>
            <Box  className="border rounded-lg p-3.5  flex justify-center mt-5">
              <img src={notfound} className="w-20 object-contain " alt="#" />
            </Box>
          </Box>
        </Box>
        <Box className="text-navTextColor text-navTextSize flex justify-center items-center h-22">
          <p>
          برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه آنلاین دیجی‌کالا) است.
          </p>
        </Box>
        <Box>
          <img style={{width:'100%',height:'100%'}} src={digikalaBrand} alt="#" />
        </Box>
      </Box>
    </>
  );
}
