import {Chart, FeaturedInfo, Sidebar, WidgetLg, WidgetSm} from "../../_components/index";
import "./index.css";
import { userData } from "../../dummyData";
import Topbar from "../../_components/Topbar";

export default function Dashboard() {
  return (
    <>
    <Topbar />
    <Sidebar />
    <div className="dashboard">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
    </>
  );
}
