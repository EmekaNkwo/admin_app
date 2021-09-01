import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <Avatar>DO</Avatar>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Tunde Doe</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            View
          </button>
        </li>
        <li className="widgetSmListItem">
        <Avatar></Avatar>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            View
          </button>
        </li>
        <li className="widgetSmListItem">
        <Avatar  className="widgetSmImg"></Avatar>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            View
          </button>
        </li>
        <li className="widgetSmListItem">
        <Avatar  className="widgetSmImg">DO</Avatar>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Donald Ope</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            View
          </button>
        </li>
        <li className="widgetSmListItem">
        <Avatar></Avatar>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            View
          </button>
        </li>
      </ul>
    </div>
  );
}
