import ScrollToTop from "@/components/ScrollToTop";
import CommonLayout from "src/layout/commonLayout";
import "@/styles/main.scss";

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
