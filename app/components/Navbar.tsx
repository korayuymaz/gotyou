import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./ui/Button";

const Navbar = () => {
  return (
    <div className="flex justify-between w-full gap-[497.5px]">
      <div>
        <Image
          src={"/logo.svg"}
          alt="logo"
          width={0}
          height={0}
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <div className="flex gap-12 text-center text-purple text-[16px]">
        <Link href="/" className="m-auto">
          HOW DOES IT WORK
        </Link>
        <Link href="/" className="m-auto">
          CITIES
        </Link>
        <Link href="/" className="m-auto">
          CONTACT US
        </Link>
        <Button text="DOWNLOAD" />
      </div>
    </div>
  );
};

export default Navbar;
