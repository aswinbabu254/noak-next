import NextImage from "../../components/NextImage";
import { useParse } from "@/logic/useParse";
const AboutSection = ({data}) => {
  return (
    <section className="about_section py-12 lg:py-16 xl:py-[155px]">
      <div className="container">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full lg:w-[50%] px-3 text-center lg:text-start">
            <span className="font-normal text-lg">{data?.subTitle}</span>
            <h2 className="font-medium leading-[1.1] mb-[60px] font-serif">
              {useParse(data?.title)}
            </h2>
            <figure className="max-w-[541px] relative pb-[37%] mx-auto lg:ml-0">
              <NextImage fill className={'absolute left-0 top-0'} src={data?.firstImage} />
            </figure>
          </div>
          <div className="relative w-full lg:w-[50%] px-3">
             <div className="absolute left-[-30%] bottom-0 z-[-1] opacity-[0.5] hidden lg:block">
             <NextImage width={539} height={329} src={data?.shape} />
             </div>
            <figure className="lg:max-w-[164px] w-full mb-[50px] mt-[55px] relative pb-[108%] lg:pb-[33%]">
              <NextImage fill className={'absolute left-0 top-0 h-full w-full object-cover'} src={data?.secondImage} />
            </figure>
            <p className="pt-[0px] max-w-[450px] leading-[1.8]">
              {data?.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
