import {
  faCloudUploadAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import {
  sidebar,
  topSidebar,
  sidebarIcons,
  downPhone,
  active,
} from "./css/sidebar.module.css";
import { IconsSideBar } from "../data/icons";
import { useAppContext } from "../context";

const activeIcons = {
  iconActive: true,
  iconIndex: 0,
};

export const SideBar = () => {
  const [appState] = useAppContext();
  const [isActive, setIsActive] = useState(activeIcons);

  const { sideBarOpen } = appState;

  const sidebaricons = IconsSideBar.map(({ icon }, i) => (
    <div
      key={i}
      className={`${sidebarIcons} ${
        isActive.iconActive && isActive.iconIndex === i && active
      }`}
      onClick={() => setIsActive({ ...activeIcons, iconIndex: i })}
    >
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
