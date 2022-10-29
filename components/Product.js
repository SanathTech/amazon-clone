import Image from "next/image";
import React from "react";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

function Product({ id, title, price, description, category, image }) {
  const [rating, setRating] = useState(0);
  const [hasPrime, setHasPrime] = useState(false);

  useEffect(() => {
    setRating(Math.floor(Math.random() * 2 + 4));
    setHasPrime(Math.random() < 0.5);
  }, []);

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 italic text-gray-400">{category}</p>
      <div className="h-[200px] flex">
        <Image
          className="mx-auto my-auto w-auto h-auto max-w-[200px] max-h-[200px]"
          src={image}
          height={200}
          width={200}
          layout="fill"
          object-fit="contain"
          alt=""
        />
      </div>

      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="z-10 mb-3">${price}</div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}
      <button className="mt-auto button">Add To Basket</button>
    </div>
  );
}

export default Product;
