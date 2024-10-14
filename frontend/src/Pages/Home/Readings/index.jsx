import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Readings() {
  const [product, setProduct] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          process.env.REACT_APP_BASE_API + "readings?populate=*"
        );
        const data = await res.json();
        setProduct(data?.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  const items = product?.map((e, index) => {
    return (
      <Box key={index} className="border rounded-lg overflow-hidden">
        <img
          src={
            process.env.REACT_APP_BASE_URL +
            e?.attributes?.image?.data[0]?.attributes?.url
          }
          alt="#"
        />
        <Box className="p-3 pb-5">
          <p className="text-navTextSize text-navTextColor">
            {e?.attributes?.name}
          </p>
        </Box>
      </Box>
    );
  });
  return (
    <>
      <Box className="flex flex-col gap-6">
        <Box className="flex justify-between px-28 items-center ">
          <Box>
            <p className="text-sm text-textButton">
              مطالب بیشتر در دیجی‌کالا مگ
            </p>
          </Box>
          <p className="text-lg ">خواندنی‌ها</p>
        </Box>
        <Box className=" flex rtl px-24 gap-3">{items}</Box>
      </Box>
    </>
  );
}
