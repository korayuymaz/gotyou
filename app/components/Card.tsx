import Image from "next/image";
import React from "react";

interface CardInterface {
  key: number;
  city: string;
  image: string;
  people: string;
  cuisine?: string;
  price?: string;
  category?: string;
  name: string;
  date: string;
}

const Card = (data: CardInterface) => {
  return (
    <div className="h-[413px] w-[392px] rounded-3xl overflow-hidden bg-white">
      <div className="relative h-[343px] w-[fill]">
        <Image
          src={data.image}
          alt={data.name}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute flex gap-3 top-4 left-4 text-[15px]">
          <div className="bg-white rounded-full pt-[6px] pb-[6px] pr-4 pl-4 flex gap-2 items-center font-gilroy font-semibold">
            <Image
              src={"/location.svg"}
              alt="location"
              height={18}
              width={14}
            />
            <span>{data.city}</span>
          </div>
          <div className="bg-white rounded-full pt-[6px] pb-[6px] pr-4 pl-4 font-gilroy font-semibold">
            {data.people}
          </div>
        </div>
        <div className="absolute flex gap-3 top-[291px] left-4 text-[15px]">
          {data.cuisine && (
            <div className="bg-white rounded-full pt-[6px] pb-[6px] pr-4 pl-4 font-gilroy font-semibold">
              {data.cuisine}
            </div>
          )}
          {data.price && (
            <div className="bg-white rounded-full pt-[6px] pb-[6px] pr-4 pl-4 font-gilroy font-semibold">
              {data.price}
            </div>
          )}
          {data.category && (
            <div className="bg-white rounded-full pt-[6px] pb-[6px] pr-4 pl-4 font-gilroy font-semibold">
              {data.category}
            </div>
          )}
        </div>
      </div>
      <div className="bg-white pl-3 pt-3">
        <div className="text-[17px] font-gilroy font-semibold">{data.name}</div>
        <div className="text-[15px]">{data.date}</div>
      </div>
    </div>
  );
};

export default Card;
