import HomeBanner from "@/widgets/HomeBanner";
import AboutSection from "@/widgets/AboutSection";
import ServiceSection from "@/widgets/ServiceSection";
import WorksSection from "@/widgets/WorksSection";
import ContactUs from "@/widgets/ContactUs";

const setComponent = (widget) => {
  const components = {
    HomeBanner,
    AboutSection,
    ServiceSection,
    WorksSection,
    ContactUs,
  };
  return components[widget.widget_type] || DefaultComponent;
};

const DefaultComponent = () => {
  return <div>Unsupported Widget</div>;
};

const Block = ({
  widget,
  ssrDeviceType,
  saveFolderType,
  saveFolderId,
  slug,
}) => {
  const Widget = setComponent(widget);
  return (
    <Widget
      {...widget}
      ssrDeviceType={ssrDeviceType}
      saveFolderId={saveFolderId}
      saveFolderType={saveFolderType}
      slug={slug}
    />
  );
};

export default Block;
