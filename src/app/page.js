import React from "react";
import { pageData } from "src/api/staticData/homePage";
import WidgetBlocks from "@/widgets/WidgetBlock";

const HomePage = () => {
  return (
    <>
      <WidgetBlocks widgets={pageData?.widgets} />
    </>
  );
};

export default HomePage;
