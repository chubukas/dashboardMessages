import {
  statusSuccess,
  statusWarning,
  statusDanger,
  socialFacebook,
  socialEmail,
  nameText,
  messageText,
  notificationBorder,
  clickable,
} from "../css/inside.module.css";
import { data } from "../../data/data";

import { Avatar } from "../Avatar";

export const Notifications = () => {
  const { notifications } = data;

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
        } ${clickable}`}
      >
        <div className="d-flex justify-content-evenly">
          <Avatar pics={pics} indicator={true} />
          <div className=" mb-2">
            <div>
              <p className={nameText}>{name}</p>

              <p className={`text-muted ${messageText}`}>{message}</p>
            </div>

            <div className="d-flex">
              <div>
                <small className={checkStatus(socialMedia)}>
                  {socialMedia}
                </small>
              </div>
              <div className="mx-2">
                <small className={checkStatus(status)}>{status}</small>
              </div>
            </div>
          </div>
          <div className="">
            <div>
              <small className={`text-muted ${messageText}`}>{time}</small>
            </div>
            <div
              className={`${
                unreadMessage < 1 ? "d-none" : ""
              } badge bg-primary rounded-circle`}
            >
              {unreadMessage}
            </div>
          </div>
        </div>
      </div>
    )
  );

  return <>{displayNotification}</>;
};
