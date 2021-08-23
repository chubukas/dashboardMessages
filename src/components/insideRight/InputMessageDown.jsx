import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import { smallBtn, clickable, dropdownContent } from "../css/inside.module.css";
import { MessageInputIcons } from "../../data/icons";

export const InputMessageDown = () => {
  const [openDropdown, setOpenDropdown] = useState(true);

  const onOpenDropdown = () => setOpenDropdown(!openDropdown);

  const displayIcons = MessageInputIcons.map((data, i) => (
    <div
      key={i}
      className={`fa-xs text-primary col-2 col-lg-1 mt-3 ${clickable}`}
    >
      <FontAwesomeIcon icon={data} />
    </div>
  ));

  return (
    <div className="d-md-flex justify-content-between mx-3">
      <div className="row">{displayIcons}</div>

      <div className={`btn-group mt-3  mt-md-0 ${smallBtn}`} role="group">
        <button type="button" className="btn btn-primary btn-sm">
          send
        </button>
        <button
          type="button"
          className={`btn btn-sm btn-primary dropdown-toggle`}
          onClick={onOpenDropdown}
        ></button>
        <div
          className={`${dropdownContent} ${
            openDropdown ? "d-block" : "d-none"
          }`}
        >
          <p className="dropdown-item text-muted">Send as reply</p>
          <p className="dropdown-item text-muted">Send as internal comment</p>
        </div>
      </div>
    </div>
  );
};
