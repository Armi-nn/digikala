import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";

export default function ProductCategory({ nameProps }) {
  const [product, setProduct] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          process.env.REACT_APP_BASE_API +
            "sub-categories?populate[products][populate]=iamge"
        );
        const data = await res.json();
        setProduct(data?.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  let card = 0;
  const item = product?.map((e) => {
    const name = e?.attributes?.name;
    if (name === nameProps) {
      return e?.attributes?.products?.data.slice(0, 4).map((product, index) =>
        product?.attributes?.iamge?.data.map((image) => (
          <Box
            className="w-32"
            key={image.id}
            sx={{
              display: "flex",
            }}
          >
            <Link>
              <img
                className={`  ${
                  index === 1 && "border-r "
                } p-2 pb-3 w-52 h-40  ${index === 3 && "border-r border-t"} ${
                  index === 2 && "border-t "
                }`}
                style={{
                  // width: "100px",
                  objectFit: "cover",
                }}
                key={image.id}
                src={process.env.REACT_APP_BASE_URL + image.attributes.url}
                alt={product.attributes.name}
              />
            </Link>
          </Box>
        ))
      );
    }
  });
  return (
    <>
      <Box className=" rtl w-85 border-r  ">
        <Box className="pr-4.5 pt-2 ">
          <p className="text-xl">{nameProps}</p>
          <p className="text-storyT  text-neutral-500">بر اساس سلیقه شما</p>
        </Box>
        <Box className="flex flex-wrap pr-10 ">{item}</Box>
        <Link>
          <Box className="flex justify-center text-textButton">
            <Box className="flex items-center text-navTextSize pb-3">
              <p>مشاهده</p>
              <ArrowBackIosIcon
                sx={{
                  fontSize: "10px",
                  marginTop: "2px",
                }}
              />
            </Box>
          </Box>
        </Link>
      </Box>
    </>
  );
}
