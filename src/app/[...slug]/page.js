import WidgetBlocks from "@/widgets/WidgetBlock";
import { pageData } from "src/api/staticData/homePage";

const CommonPage = async ({ params, searchParams }) => {

  return (
    <main>
      <WidgetBlocks widgets={pageData?.widgets} />
    </main>
  );
};

export default CommonPage;
