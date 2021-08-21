import {
  faCloudUploadAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  sidebar,
  topSidebar,
  sidebarIcons,
  downPhone,
} from "./css/sidebar.module.css";
import { sidebarData } from "../data/sidebar";
import { useAppContext } from "../context";

export const SideBar = () => {
  const [appState] = useAppContext();

  const { sideBarOpen } = appState;

  const sidebaricons = sidebarData.map(({ icon }, i) => (
    <div key={i} className={sidebarIcons}>
      <FontAwesomeIcon icon={icon} />
    </div>
  ));
  return (
    <>
      <div
        className={`${
          sideBarOpen ? "d-md-block " : "d-none"
        } d-md-block  ${sidebar}`}
      >
        <div className={topSidebar}>
          <FontAwesomeIcon icon={faCloudUploadAlt} />
        </div>
        {sidebaricons}
        <div className={downPhone}>
          <FontAwesomeIcon icon={faSignOutAlt} />
        </div>
      </div>
    </>
  );
};
