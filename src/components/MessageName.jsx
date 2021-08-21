import {
  messageText,
  socialFacebook,
  clickable,
} from "../components/css/inside.module.css";
import { createNameAcronym } from "../util/createNameAcronym";

export const MessageName = ({
  removeReciever,
  onRemoveReciever,
  nameType,
  userName,
  userEmail,
  colorText,
}) => {
  return (
    <div className={`${messageText} text-muted my-auto py-2 d-flex`}>
      <span className={`mx-3 ${nameType ? "d-block" : "d-none"}`}>
        {nameType}:{" "}
      </span>
      <span className={removeReciever ? "d-block" : "d-none"}>
        <span className={colorText}>{createNameAcronym(userName)}</span>
        <span className={`${socialFacebook} `}>
          {userEmail}
          <span
            className={`mx-2 ${clickable} ${onRemoveReciever ? "" : "d-none"}`}
            onClick={onRemoveReciever}
          >
            X
          </span>
        </span>
      </span>
    </div>
  );
};
