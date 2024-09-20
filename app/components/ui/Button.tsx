import Image from "next/image";
import React from "react";

const Button = ({ text }: { text: string }) => {
  return (
    <button className="rounded-full px-[24px] py-2 bg-purple flex text-white h-10 text-center gap-2 m-auto">
      {text}
      <div className="relative w-[12px] h-[12px]">
        <Image
          src={"/vector.svg"}
          alt="vector"
          width="12"
          height="12"
          className="absolute top-[7px] right-0"
        />
      </div>
    </button>
  );
};

export default Button;
