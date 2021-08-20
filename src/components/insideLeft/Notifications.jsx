import {
  statusSuccess,
  statusWarning,
  statusDanger,
  socialFacebook,
  socialEmail,
  nameText,
  messageText,
  notificationBorder,
} from "../css/inside.module.css";
import { avatar } from "../css/header.module.css";
import { data } from "../../data/data";

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

  const displaySocialMedia = notifications.map(
    (
      { name, message, time, socialMedia, status, unreadMessage, pics },
      i,
      arr
    ) => (
      <div
        key={i}
        className={`${arr.length === i + 1 ? "" : notificationBorder}`}
      >
        <div className="d-flex">
          <div className="mx-3 my-auto">
            <img className={avatar} src={pics} alt="avatar" />
          </div>
          <div className="mx-3 mb-2">
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
          <div className="mx-3">
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

  return <>{displaySocialMedia}</>;
};
