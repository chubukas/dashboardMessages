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
  faBookReader,
} from "@fortawesome/free-solid-svg-icons";

import {
  inputBox,
  notificationBorder,
  messageText,
  avatarName,
  socialFacebook,
  textArea,
  smallBtn,
} from "../css/inside.module.css";
import { createNameAcronym } from "../../util/createNameAcronym";

export const InputMessage = () => {
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
    faBookReader,
  ];

  const displayIcons = Icons.map((data, i) => (
    <div key={i} className="fa-xs mx-2 text-primary">
      <FontAwesomeIcon icon={data} />
    </div>
  ));

  return (
    <div className="mb-4">
      <div className={inputBox}>
        <div className={notificationBorder}>
          <div className="d-flex justify-content-between">
            <div className={`${messageText} text-muted my-auto py-2`}>
              <span className="mx-3">To: </span>
              <span className={avatarName}>
                {createNameAcronym("Steph Okafor")}
              </span>
              <span className={socialFacebook}>
                Steph.Okafor@alphacx.com <span className="mx-2">X</span>
              </span>
            </div>
            <div className={`text-primary my-auto ${messageText}`}>
              <span>cc</span>
              <span className="mx-3"> bc</span>
            </div>
          </div>
        </div>
        <div>
          <textarea
            className={textArea}
            name="textarea"
            id=""
            cols="78"
            rows="4"
          ></textarea>
        </div>
        <div className="d-flex justify-content-between mx-3">
          <div className="d-flex">{displayIcons}</div>

          <div className={`btn-group btn-group-sm ${smallBtn}`} role="group">
            <button className="btn btn-primary">send</button>
            <button className="btn btn-primary dropdown-toggle"></button>
          </div>
        </div>
      </div>
    </div>
  );
};
