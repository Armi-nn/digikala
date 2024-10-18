import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Category() {
  const [category, SetCategory] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          process.env.REACT_APP_BASE_API + "categories?populate=*"
        );
        const data = await res.json();
        SetCategory(data?.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  const item = category?.map((e, index) => {
    return (
      <Box
        key={index}
        className="flex cursor-pointer items-center flex-col h-28 gap-3 lg:text-navTextSize text-xs lg:w-25 w-18 text-center"
      >
        <img
          className="lg:w-24 w-18 "
          src={
            process.env.REACT_APP_BASE_URL +
            e?.attributes?.image?.data[0]?.attributes?.url
          }
          alt={e?.attributes?.name}
        />
        <p>{e?.attributes?.name} </p>
      </Box>
    );
  });
  return (
    <>
      <Box className="flex justify-center text-2xl mt-9">
        <p>خرید بر اساس دسته بندی</p>
      </Box>
      <Box className="flex rtl w-full justify-center items-center lg:gap-10 gap-3 flex-wrap xl:px-36 px-3 mt-11">
        {item}
      </Box>
    </>
  );
}
