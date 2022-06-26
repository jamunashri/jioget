import Chart from "../../_components/Chart/index";
import Sidebar from "../../_components/Sidebar/index";
import WidgetSm from "../../_components/WidgetSm/index";
import WidgetLg from "../../_components/WidgetLg/index";
import FeaturedInfo from "../../_components/FeaturedInfo/index";
import "./index.css";
import { userData } from "../../dummyData";
import Topbar from "../../_components/Topbar";

export default function dashboard() {
  return (
    <>
    <Topbar />
    <Sidebar />
    <FeaturedInfo />
    <div className="dashboard">
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="dashboardWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
    </>
  );
}
