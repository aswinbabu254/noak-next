import { useParse } from "@/logic/useParse";
import React from "react";

const HomeBanner = ({data}) => {
  return (
    <section className="relative flex items-end h-screen min-h-[600px] bg-black text-white">
      <video
        autoPlay
        playsInline
        muted
        poster={data?.poster_img}
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source />
      </video>
      <div className="container ">
        <div className="relative pb-[10vh]">
          <h1 className="font-medium max-w-[543px] tracking-[-2px] leading-[1.1] font-serif">{useParse(data?.title)}</h1>
          <p className="max-w-[390px] tracking-[-0.3px] mb-0 mt-4">{data?.description}</p>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
