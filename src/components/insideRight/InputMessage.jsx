import { useState } from "react";

import {
  inputBox,
  notificationBorder,
  messageText,
  textArea,
  clickable,
  avatarNameRed,
  avatarName,
} from "../css/inside.module.css";

import { MessageName } from "../MessageName";
import { SuggestionBox } from "../SuggestionsBox";
import { InputMessageDown } from "./InputMessageDown";

export const InputMessage = () => {
  const [removeReciever, setRemoveReciever] = useState(true);

  const onRemoveReciever = () => setRemoveReciever(!removeReciever);

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

        <InputMessageDown />
      </div>

      <SuggestionBox UsersSearch={UsersSearch} />
    </div>
  );
};
