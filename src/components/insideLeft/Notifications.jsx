import { useState } from "react";

import {
  statusSuccess,
  statusWarning,
  statusDanger,
  socialFacebook,
  socialEmail,
  notificationBorder,
  clickable,
  innerActive,
} from "../css/inside.module.css";
import { data } from "../../data/data";

import { NotificationItem } from "./NotificationItem";

const activeItems = {
  itemMessage: false,
  messageId: 0,
};

export const Notifications = () => {
  const { notifications } = data;

  const [activeMessage, setActiveMessage] = useState(activeItems);

  const checkStatus = (status) => {
    let color;
    switch (status) {
      case "In Progress":
        color = statusSuccess;
        break;
      case "Open":
        color = statusWarning;
        break;
      case "Close":
        color = statusDanger;
        break;
      case "Facebook":
        color = socialFacebook;
        break;
      case "Email":
        color = socialEmail;
        break;
      default:
        color = socialEmail;
        break;
    }
    return color;
  };

  const displayNotification = notifications.map(
    (
      { name, message, time, socialMedia, status, unreadMessage, pics },
      i,
      arr
    ) => (
      <div
        key={i}
        className={`${
          arr.length === i + 1 ? "mb-4 mb-md-0" : notificationBorder
        } ${clickable} ${
          activeMessage.itemMessage &&
          activeMessage.messageId === i &&
          innerActive
        }`}
        onClick={() =>
          setActiveMessage({
            itemMessage: true,
            messageId: i,
          })
        }
      >
        <NotificationItem
          name={name}
          message={message}
          time={time}
          socialMedia={socialMedia}
          status={status}
          unreadMessage={unreadMessage}
          pics={pics}
          checkStatus={checkStatus}
          activeMessage={activeMessage}
          index={i}
        />
      </div>
    )
  );

  return <>{displayNotification}</>;
};
