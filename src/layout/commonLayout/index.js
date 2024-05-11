import Footer from "@/components/Footer";
import MainHeader from "@/components/Header";
import React from "react";

const CommonLayout = ({ children }) => {
  return (
    <main className="MainWrap">
      <MainHeader />
      {children}
      <Footer />
    </main>
  );
};

export default CommonLayout;
