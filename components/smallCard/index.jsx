import React from "react";

import Image from "next/image";

function SmallCard({ image, title, desc }) {
  return (
    <div className="bg-rellenos w-full rounded-lg p-5">
      <div className="relative w-14 h-14">
        <Image src={image} alt="logo" layout="fill" objectFit="contain" />
      </div>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="mt-1">{desc}</p>
    </div>
  );
}

export default SmallCard;
