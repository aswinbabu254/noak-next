import React from "react";
import { pageData } from "src/api/staticData/homePage";
import WidgetBlocks from "@/widgets/WidgetBlock";

export function generateMetadata() {
  return {
    title: "Noak: Elevate Your Online Presence with Expert Website Design & DevelopmentNoak: Empowering Your Digital Success Through Expert Website Design & Development",
    description: "Transform your digital presence with Noak – where innovative design meets seamless development. Elevate your online identity with our tailored solutions crafted to captivate and engage your audience. Explore our comprehensive services today.",
    openGraph: {
      images: "/images/og-image.png",
    },
  };
}

const HomePage = () => {
  return (
    <>
      <WidgetBlocks widgets={pageData?.widgets} />
    </>
  );
};

export default HomePage;
