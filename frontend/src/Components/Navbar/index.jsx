import React, { useEffect, useRef, useState } from "react";
import Banner from "./Banner";
import { Box } from "@mui/material";
import Logo from "../../assets/full-horizontal.png";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import DiscountRoundedIcon from "@mui/icons-material/DiscountRounded";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import WhatshotRoundedIcon from "@mui/icons-material/WhatshotRounded";
import FlakyRoundedIcon from "@mui/icons-material/FlakyRounded";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";

export default function Navbar() {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasScrolled1000, setHasScrolled1000] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 1000) {
      setHasScrolled1000(true);
    } else {
      setHasScrolled1000(false);
    }

    if (currentScrollY > lastScrollY && currentScrollY > 1000) {
      setIsScrollingDown(true);
    } else {
      setIsScrollingDown(false);
    }

    setLastScrollY(currentScrollY);
  };

  const navbarRef = useRef(null);

  useEffect(() => {
    const navbarHeight = navbarRef.current.offsetHeight;
    document.body.style.paddingTop = `${navbarHeight}px`;
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.body.style.paddingTop = "0px";
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handelFocus = () => {
    console.log("focus");
  };

  return (
    <>
      <Box
        ref={navbarRef}
        sx={{ zIndex: 9999 }}
        className={`fixed w-full top-0 shadow-slate-300 shadow-bottom lg:shadow-none `}
      >
        <Banner />
        <Box className="bg-white h-23 pt-3">
          <Box className="flex justify-between pl-3 xl:pl-6 ">
            <Box className="lg:flex hidden gap-3">
              <Link>
                <Box className="mt-2 mr-2">
                  <ShoppingCartOutlinedIcon />
                </Box>
              </Link>
              <Box className="w-0.1 h-6 mt-2 bg-inpBorderL"></Box>
              <Box>
                <Box className="flex gap-2 border py-2 px-3 rounded-lg text-sm justify-center cursor-pointer">
                  <p>ورود | ثبت نام</p>
                  <LoginIcon className="rotate-180" />
                </Box>
              </Box>
            </Box>
            <Box className="flex gap-5">
              <Box>
                <Box className="relative">
                  <input
                    onFocus={handelFocus}
                    className="lg:w-99 w-100 lg:pr-14 pr-12 focus:outline-none lg:rounded-lg rounded-full   h-10 lg:h-11 bg-inpSearch rtl relative  pb-2 text-black cursor-default"
                    type="text"
                    placeholder="جستجو"
                  />
                  <SearchIcon
                    style={{ fontSize: "25px" }}
                    className="absolute right-4 lg:top-3 top-2 text-slate-400"
                  />
                </Box>
              </Box>
              <Box className="hidden lg:block">
                <Link to={"/"}>
                  <img
                    className="w-48 cursor-pointer mt-2 mr-3 xl:mr-6"
                    src={Logo}
                    alt=""
                  />
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          zIndex: 9998,
          position: "relative",
        }}
        className={`bg-white shadow-slate-300 shadow-bottom w-full h-8.5  justify-between transition-transform duration-300 hidden lg:flex ${
          isScrollingDown ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <Box>
          <p className="text-navTextSize pl-4.5 cursor-pointer hidden xl:flex gap-1.5">
            ارسال به تهران عباس آباد علاقبند
            <PlaceRoundedIcon sx={{ fontSize: "20px" }} className="mt-0.5" />
          </p>
        </Box>
        <Box className="flex">
          <ul className="flex text-navTextColor gap-4.5 mr-3 text-sm text-navTextSize mt-0.5">
            <li className="cursor-pointer">!در دیجی کالا بفروشید</li>
            <li className="cursor-pointer">سوالی دارید؟</li>
            <li className=" gap-1.5 cursor-pointer hidden xl:flex">
              تخفیف ها و پیشنهادها
              <DiscountRoundedIcon sx={{ fontSize: "18px" }} className="mt-1" />
            </li>
            <li className="flex gap-1.5 cursor-pointer">
              پر فروش ترین ها
              <WhatshotRoundedIcon sx={{ fontSize: "18px" }} className="mt-1" />
            </li>
            <li className="flex gap-1.5 cursor-pointer">
              کارت هدیه
              <CardGiftcardOutlinedIcon
                sx={{ fontSize: "18px" }}
                className="mt-1"
              />
            </li>
            <li className="flex gap-1.5 cursor-pointer">
              سوپر مارکت
              <ShoppingBasketOutlinedIcon
                sx={{ fontSize: "18px" }}
                className="mt-1"
              />
            </li>
            <li className="flex gap-1 cursor-pointer">
              <p className="">شگفت انگیزها</p>
              <FlakyRoundedIcon sx={{ fontSize: "17px" }} className="mt-1" />
            </li>
          </ul>
          <Box className="w-0.1 h-4 mt-1.5 mr-5 bg-inpBorderL"></Box>
          <Box className="flex mt-0.5 mr-7 gap-1 text-xsPlus text-navMenuTextColor">
            <p>دسته بندی کالاها</p>
            <MenuRoundedIcon sx={{ fontSize: "18px" }} className="mt-1" />
          </Box>
        </Box>
      </Box>
    </>
  );
}
