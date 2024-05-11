import React from "react";
import WorkCard from "../../components/WorkCard";
const WorksSection = ({data}) => {
  return (
    <section className="py-12 lg:py-20 xxl:py-[150px]">
      <div className="container">
        <h2 className="font-medium font-serif mb-8 lg:mb-[65px] text-center lg:text-start">{data?.title}</h2>
        <div className="work_card_wrap grid lg:grid-cols-2 gap-[60px] lg:gap-[90px]">
          {data?.works &&
            data.works.length !== 0 &&
            data.works?.map((item, index) => (
              <div
                key={index}
                className={index % 2 === 0 ? "" : "relative lg:top-[100px]"}
              >
                <WorkCard item={item} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;