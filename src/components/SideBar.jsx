import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { sidebar, topSidebar, sidebarIcons } from "./css/sidebar.module.css";
import { sidebarData } from "../data/sidebar";

export const SideBar = () => {
  const sidebaricons = sidebarData.map(({ icon }, i) => (
    <div key={i} className={sidebarIcons}>
      <FontAwesomeIcon icon={icon} />
    </div>
  ));

  return (
    <>
      <div className={sidebar}>
        <div className={topSidebar}>
          <FontAwesomeIcon icon={faCloudUploadAlt} />
        </div>
        {sidebaricons}
      </div>
    </>
  );
};
