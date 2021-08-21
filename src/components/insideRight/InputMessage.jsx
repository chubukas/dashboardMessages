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
  textArea,
  smallBtn,
  clickable,
  avatarNameRed,
  avatarName,
} from "../css/inside.module.css";

import { MessageName } from "../MessageName";
import { SuggestionBox } from "../SuggestionsBox";

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

  const UsersSearch = [
    { userName: "Steph Okafor", userEmail: "Steph.Okafor@alphacx.com" },
    { userName: "Steph Okafor", userEmail: "Steph.Okafor@alphacx.com" },
  ];

  return (
    <div className="mb-4">
      <div className={inputBox}>
        <div className={notificationBorder}>
          <div
            className={`d-md-flex justify-content-between ${notificationBorder}`}
          >
            <MessageName
              onRemoveReciever={onRemoveReciever}
              removeReciever={removeReciever}
              nameType="To"
              userName="Steph Okafor"
              userEmail="Steph.Okafor@alphacx.com"
              colorText={avatarName}
            />
            <div
              className={`text-primary my-auto mx-3 mt-2 mt-mb-0 d-none d-md-block ${messageText}`}
            >
              <span className={clickable}>cc</span>
              <span className={`mx-3 ${clickable}`}> bc</span>
            </div>
          </div>

          <MessageName
            onRemoveReciever={onRemoveReciever}
            removeReciever={removeReciever}
            nameType="CC"
            userName="Steph Okafor"
            userEmail="Steph.Okafor@alphacx.com"
            colorText={avatarNameRed}
          />
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

      <SuggestionBox UsersSearch={UsersSearch} />
    </div>
  );
};
