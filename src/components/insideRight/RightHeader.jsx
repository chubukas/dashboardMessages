import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsAltH,
  faUser,
  faUserPlus,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

import { chatClose, clickable } from "../css/inside.module.css";

export const RightHeader = ({ smPhone }) => {
  const Icons = [faArrowsAltH, faUserPlus, faUser, faCheckCircle];

  const [closeChatState, setCloseChatState] = useState(true);

  const closeChatToggle = (data) => {
    data === faCheckCircle && setCloseChatState(!closeChatState);
  };

  const displayIcons = Icons.map((data, i) => (
    <div
      className={`${smPhone ? "col-2 mt-3 text-center" : "mx-3"} ${
        data === faCheckCircle ? "text-success" : "text-muted"
      } ${clickable} `}
      key={i}
      onClick={() => closeChatToggle(data)}
    >
      <FontAwesomeIcon icon={data} />

      <div
        className={`${
          data === faCheckCircle ? "d-block" : "d-none"
        } ${chatClose} ${closeChatState ? "d-block" : "d-none"}`}
      >
        <p>Close chat</p>
      </div>
    </div>
  ));

  return (
    <div className="d-md-flex">
      <div>
        <select
          name="select"
          id="select"
          className="form-select form-select-sm bg-light"
          araia-aria-label=".form-select-sm example"
        >
          <option value="">mark as closed</option>
          <option value="Open">Open</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Closed">Closed</option>
        </select>
      </div>
      <div className={`${smPhone ? "row" : "d-flex justify-content-end"}`}>
        {displayIcons}
      </div>
    </div>
  );
};
