import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmile,
  faPrint,
  faFileAlt,
  faBold,
  faItalic,
  faUnderline,
  faAlignCenter,
  faAlignLeft,
  faAlignRight,
  faHandHolding,
  faFileImage,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

import {
  inputBox,
  notificationBorder,
  messageText,
  avatarName,
  socialFacebook,
  textArea,
  smallBtn,
  clickable,
} from "../css/inside.module.css";
import { createNameAcronym } from "../../util/createNameAcronym";

export const InputMessage = () => {
  const [removeReciever, setRemoveReciever] = useState(true);

  const onRemoveReciever = () => setRemoveReciever(!removeReciever);

  const Icons = [
    faSmile,
    faPrint,
    faFileAlt,
    faBold,
    faItalic,
    faUnderline,
    faAlignCenter,
    faAlignLeft,
    faAlignRight,
    faHandHolding,
    faFileImage,
    faBookOpen,
  ];

  const displayIcons = Icons.map((data, i) => (
    <div
      key={i}
      className={`fa-xs text-primary col-2 col-lg-1 mt-3 ${clickable}`}
    >
      <FontAwesomeIcon icon={data} />
    </div>
  ));

  return (
    <div className="mb-4">
      <div className={inputBox}>
        <div className={notificationBorder}>
          <div className="d-md-flex justify-content-between">
            <div className={`${messageText} text-muted my-auto py-2 d-flex`}>
              <span className="mx-3">To: </span>
              <span className={removeReciever ? "d-block" : "d-none"}>
                <span className={avatarName}>
                  {createNameAcronym("Steph Okafor")}
                </span>
                <span className={`${socialFacebook} `}>
                  Steph.Okafor@alphacx.com{" "}
                  <span
                    className={`mx-2 ${clickable}`}
                    onClick={onRemoveReciever}
                  >
                    X
                  </span>
                </span>
              </span>
            </div>
            <div
              className={`text-primary my-auto mx-3 mt-2 mt-mb-0 ${messageText}`}
            >
              <span className={clickable}>cc</span>
              <span className={`mx-3 ${clickable}`}> bc</span>
            </div>
          </div>
        </div>
        <div>
          <textarea
            className={textArea}
            name="textarea"
            id="textare"
          ></textarea>
        </div>
        <div className="d-md-flex justify-content-between mx-3">
          <div className="row">{displayIcons}</div>

          <div
            className={`btn-group btn-group-sm mt-3  mt-md-0 ${smallBtn}`}
            role="group"
          >
            <button className="btn btn-primary">send</button>
            <button className="btn btn-primary dropdown-toggle"></button>
          </div>
        </div>
      </div>
    </div>
  );
};
