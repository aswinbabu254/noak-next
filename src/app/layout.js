import ScrollToTop from "@/components/ScrollToTop";
import CommonLayout from "src/layout/commonLayout";
import "@/styles/main.scss";

export const metadata = {
  title: "Noak: Elevate Your Online Presence with Expert Website Design & DevelopmentNoak: Empowering Your Digital Success Through Expert Website Design & Development",
  description: "Transform your digital presence with Noak – where innovative design meets seamless development. Elevate your online identity with our tailored solutions crafted to captivate and engage your audience. Explore our comprehensive services today.",
  openGraph: {
    images: "/images/og-image.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <CommonLayout>{children}</CommonLayout>
          <ScrollToTop />
      </body>
    </html>
  );
}
