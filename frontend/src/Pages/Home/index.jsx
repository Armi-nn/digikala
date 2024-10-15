import React from "react";
import StorySlider from "./StorySlider";
import { Box } from "@mui/material";
import BannerSlider from "./BannerSlider";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import image1 from "../../assets/ac127167132653d14c758748b07824a6.png";
import image2 from "../../assets/987f905df337a78bad4da4d17b6eb20f.png";
import image3 from "../../assets/3.png";
import image4 from "../../assets/4.png";
import image5 from "../../assets/5.png";
import image6 from "../../assets/6.png";
import image7 from "../../assets/7.png";
import image8 from "../../assets/8.png";
import image9 from "../../assets/9.png";
import imageMarket from "../../assets/imageMarket.png";
import div2image1 from "../../assets/a7463b9e61a8cbf1daf40537c7997503.png";
import div2image2 from "../../assets/f0d3ab9abc4b8700de602ca65bdf6863.png";
import div2image3 from "../../assets/aae9a497e401c73c79a5170ba5877cd6.png";
import div2image4 from "../../assets/92b8254442369d3528cdcd21d421f07c.png";
import shoes from "../../assets/shoes1.png";
import shoes2 from "../../assets/shoes2.png";
import imageSpice from "../../assets/46446d7aa0232ae3cfd8f7f07c4a7a7e.png";
import iamgeDigi from "../../assets/Screenshotdigi.png";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ProductSlider from "./ProductSlider";

import Category from "./Category";
import BrandSlider from "./BrandSlider";
import ProductCategory from "./ProductCategory";
import PopularProductSlider from "./PopularProductSlider";
import imageCosmeticCream from "../../assets/ScreenshotcosmeticCream.png";
import DiscountedProducts from "./DiscountedProducts";
import Readings from "./Readings";

export default function Home() {
  return (
    <>
      <Box>
        <Box className="flex justify-end items-start pr-10">
          <Box
            sx={{ marginTop: "490px" }}
            className="fixed z-50 text-white bg-red-500 cursor-pointer p-3 rounded-full "
          >
            <HeadsetMicIcon className="" />
          </Box>
        </Box>
        <Box
          sx={{ marginTop: "485px", marginLeft: "15px" }}
          className="text-white cursor-pointer p-2.5 rounded-full z-50 fixed flex gap-2 bg-green-600 "
        >
          <ShoppingBasketIcon sx={{ fontSize: "28px" }} />
          <p className="font-bold text-lg">سوپرمارکت</p>
        </Box>
      </Box>

      <StorySlider />

      <BannerSlider />

      <Box className="flex rtl justify-between px-32 mt-6 text-navTextColor">
        <Box className="cursor-pointer w-12.5 text-navTextSize text-center flex flex-col gap-1">
          <img src={image1} alt="#" />
          <p>دریافت وام</p>
        </Box>
        <Box className="cursor-pointer w-12.5 text-navTextSize text-center flex flex-col gap-1">
          <img src={image2} alt="#" />
          <p>بازگشت به مدرسه</p>
        </Box>
        <Box className="cursor-pointer w-12.5 text-navTextSize text-center flex flex-col gap-1">
          <img src={image3} alt="#" />
          <p>بهداشتی مراقبتی</p>
        </Box>
        <Box className="cursor-pointer w-12.5 text-navTextSize text-center flex flex-col gap-1">
          <img src={image4} alt="#" />
          <p>انبار‌تکانی پوشاک</p>
        </Box>
        <Box className="cursor-pointer w-12.5 text-navTextSize text-center flex flex-col gap-1">
          <img src={image5} alt="#" />
          <p>پرفروش‌های لوازم‌تحریر</p>
        </Box>
        <Box className="cursor-pointer w-12.5 text-navTextSize text-center flex flex-col gap-1">
          <img src={image6} alt="#" />
          <p>تبلت خوش‌قیمت</p>
        </Box>
        <Box className="cursor-pointer w-12.5 text-navTextSize text-center flex flex-col gap-1">
          <img src={image7} alt="#" />
          <p>دیجی‌کالا مهر</p>
        </Box>
        <Box className="cursor-pointer w-12.5 text-navTextSize text-center flex flex-col gap-1">
          <img src={image8} alt="#" />
          <p>جایزه خرید اول</p>
        </Box>
        <Box className="cursor-pointer rounded-full w-12.5 text-navTextSize text-center flex flex-col gap-1">
          <img src={image9} alt="#" />
          <p>لوازم دانشجویی</p>
        </Box>
        <Box className="cursor-pointer w-12.5 text-navTextSize text-center flex flex-col gap-1 ">
          <Box className="bg-slate-100 text-slate-400 rounded-full w-12.5 h-12.5 flex justify-center ">
            <MoreHorizIcon sx={{ fontSize: "30px" }} className="mt-2.5" />
          </Box>
          <p>بیشتر</p>
        </Box>
      </Box>

      <Box className="mt-11">
        <ProductSlider />
      </Box>

      <Box className="mt-3.5 cursor-pointer flex justify-center">
        <img className="h-26 w-99.7" src={imageMarket} alt="#" />
      </Box>

      <Box className="flex ml-24 mt-3.5 gap-4 w-99.7">
        <img
          className="w-80 rounded-lg cursor-pointer"
          title="پارتنرشیپ-سن ایچ"
          src={div2image1}
          alt=""
        />
        <img
          className="w-80 rounded-lg cursor-pointer"
          title="پارتنرشیپ-کفش شیما"
          src={div2image2}
          alt="#"
        />
        <img
          className="w-80 rounded-lg cursor-pointer"
          title="خودرو و موتور سیکلت"
          src={div2image3}
          alt="#"
        />
        <img
          className="w-80 rounded-lg cursor-pointer"
          title="طلا"
          src={div2image4}
          alt="#"
        />
      </Box>

      <Category />

      <Box className="flex justify-center gap-4 mt-28">
        <img
          className="w-99.1 cursor-pointer rounded-2xl"
          src={shoes}
          alt="#"
        />
        <img
          className="w-99.1 cursor-pointer rounded-2xl"
          src={shoes2}
          alt="#"
        />
      </Box>

      <Box className="mt-4">
        <BrandSlider />
      </Box>

      <Box className="flex justify-center gap-4 mt-4">
        <img
          className="w-99.1 cursor-pointer rounded-2xl"
          src="https://dkstatics-public.digikala.com/digikala-adservice-banners/6fc8e2d21aba219e1aa2cc93cb4a5fd66a16caac_1726292708.gif?x-oss-process=image"
          alt="#"
        />
        <img
          className="w-99.1 cursor-pointer rounded-2xl"
          src={imageSpice}
          alt="#"
        />
      </Box>

      <Box className="flex justify-center">
        <Box className="flex border rounded-2xl mt-4 w-99.6 rtl">
          <ProductCategory nameProps={"کیف و کاور گوشی"} />
          <ProductCategory nameProps={"گوشی موبایل"} />
          <ProductCategory nameProps={"هدفون، هدست و هندزفری"} />
          <ProductCategory nameProps={"ساعت هوشمند"} />
        </Box>
      </Box>

      <Box className=" flex justify-center mt-5">
        <img className="w-99.7 px-1.5" src={iamgeDigi} alt="" />
      </Box>

      <Box>
        <PopularProductSlider
          title={"پرفروش‌ترین کالاها"}
          url={"popular-products?populate=*"}
        />
      </Box>

      <Box className="flex justify-center">
        <Box className="flex border rounded-2xl mt-4 w-99.6 rtl">
          <ProductCategory nameProps={"لپ تاپ و الترابوک"} />
          <ProductCategory nameProps={"سایر لوازم خودرو"} />
          <ProductCategory nameProps={"ساعت عقربه ای مردانه"} />
          <ProductCategory nameProps={"کفش ورزشی زنانه و مردانه"} />
        </Box>
      </Box>

      <Box className="px-22.5 mt-3">
        <img className="cursor-pointer " src={imageCosmeticCream} alt="#" />
      </Box>

      <Box>
        <Box className="flex justify-center">
          <Box className="flex border rounded-2xl mt-4 w-99.6 rtl">
            <DiscountedProducts className="" />
          </Box>
        </Box>
      </Box>

      <Box>
        <PopularProductSlider
          title={"پرفروش‌ترین کالاها"}
          url={"popular-product2s?populate=*"}
        />
      </Box>

      <Box className="mt-7">
        <Readings />
      </Box>
    </>
  );
}
