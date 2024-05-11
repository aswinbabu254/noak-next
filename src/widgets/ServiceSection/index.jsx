import ServiceCard from "../../components/ServiceCard";
const ServiceSection = ({data}) => {
  return (
    <section className="bg-[#EAF2FF] py-12 lg:py-20 xl:py-[117px]">
      <div className="container">
        <h2 className="text-center max-w-[750px] m-auto font-medium leading-[1.1] mb-[46px] font-serif">
          {data?.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[22px]">
          {data?.cards && 
          data.cards.length !== 0 &&
          data.cards.map((item, index) => (
              <ServiceCard key={index} item={item} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;