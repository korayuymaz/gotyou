import Image from "next/image";
import React from "react";
import Filter from "./ui/Filter";

const Filters = () => {
  return (
    <div className="mt-[28px] text-[15px] flex gap-3 ">
      <Filter text="City" drop={true} />
      <Filter text="Price Range" drop={true} />
      <Filter text="Date" drop={true} />
      <Filter text="All Filters" drop={false} />
    </div>
  );
};

export default Filters;
