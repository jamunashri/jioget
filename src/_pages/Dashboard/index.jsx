import {Chart, FeaturedInfo, WidgetLg, WidgetSm} from "../../_components/index";
import "./index.css";
import { userData } from "../../dummyData";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
