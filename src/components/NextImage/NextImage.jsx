import { forwardRef } from "react";
import Image from "next/image";

const NextImage = forwardRef(({ src, alt, ...rest }, ref) => {
  return <Image src={src || ""} alt={alt || "images"} {...rest} ref={ref} />;
});

export default NextImage;
