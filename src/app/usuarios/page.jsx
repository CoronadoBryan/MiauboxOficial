import Breadcrumb from "@/components/Breadcrumb";
import DashBoardLayerTwo from "@/components/UserList";
import MasterLayout from "@/masterLayout/MasterLayout";

export const metadata = {
  title: "Usuario Dashboard",
  description: "Usuario management dashboard",
};

const Page = () => {
  return (
    <MasterLayout>
      <Breadcrumb title="CRM" />
      <DashBoardLayerTwo />
    </MasterLayout>
  );
};

export default Page;
