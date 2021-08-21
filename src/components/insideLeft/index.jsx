import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faSearch } from "@fortawesome/free-solid-svg-icons";

import {
  insideLeftMain,
  textInput,
  searchIcon,
  divText,
  headerText,
  clickable,
} from "../css/inside.module.css";
import { Notifications } from "./Notifications";

export const InsideLeft = () => {
  return (
    <div className={insideLeftMain}>
      <div className={`d-flex justify-content-between ${headerText}`}>
        <div className={`mx-3 fw-bolder ${clickable}`}>
          Facebook <FontAwesomeIcon icon={faArrowDown} />
        </div>
        <div className={`text-muted mx-3 ${clickable}`}>
          Open
          <FontAwesomeIcon icon={faArrowDown} />
        </div>
      </div>
      <div className={`${divText} d-flex mx-3`}>
        <span className={searchIcon}>
          <FontAwesomeIcon icon={faSearch} />
        </span>
        <input
          type="text"
          name="search"
          id="search"
          className={textInput}
          placeholder="search"
        />
      </div>
      <div className="mt-3">
        <Notifications />
      </div>
    </div>
  );
};
