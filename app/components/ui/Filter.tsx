import Image from "next/image";
import React from "react";

const Filter = ({ text, drop }: { text: string; drop: boolean }) => {
  return (
    <div className="flex gap-3 border pr-4 pl-4 pt-2 pb-2 border-purple rounded-full items-center">
      <div className="">{text}</div>
      {drop && (
        <div>
          <Image src={"/drop.svg"} alt="drop" width={12} height={8} />
        </div>
      )}
    </div>
  );
};

export default Filter;
