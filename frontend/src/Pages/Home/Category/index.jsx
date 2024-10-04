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
        className="flex cursor-pointer items-center flex-col h-28 gap-3 text-navTextSize w-25 text-center"
      >
        <img
          className="w-24"
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
      <Box className="flex rtl w-full justify-center items-center gap-10 flex-wrap px-36 mt-11">
        {item}
      </Box>
    </>
  );
}
