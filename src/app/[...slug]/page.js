import WidgetBlocks from "@/widgets/WidgetBlock";
import { pageData } from "src/api/staticData/homePage";
// import nextFetch from "@/utilities/nextFetch";

const CommonPage = async ({ params, searchParams }) => {
  //   const data = await nextFetch(`/${slug}${langParam}`, options);

  //   const widgets = data?.data?.widgets ?? null;

  //   if (!data) {
  //     notFound();
  //   }

  return (
    <main>
      <WidgetBlocks widgets={pageData?.widgets} />
    </main>
  );
};

export default CommonPage;
