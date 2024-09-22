"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "./ui/Button";

const Navbar = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Function to update the width
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    // Set initial width
    updateWidth();

    // Add event listener to update width on resize
    window.addEventListener("resize", updateWidth);
    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="flex justify-between w-full xl:gap-[497.5px] lg:gap-2 flex-wrap">
      {width >= 1028 && (
        <div>
          <Image src={"/logo.svg"} alt="logo" width={108} height={63} />
        </div>
      )}
      <div className="flex flex-wrap gap-12 text-center text-purple text-[16px]">
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
