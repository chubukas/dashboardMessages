import { nameText, messageText, outerActive } from "../css/inside.module.css";

import { Avatar } from "../Avatar";

export const NotificationItem = ({
  name,
  message,
  time,
  socialMedia,
  status,
  unreadMessage,
  pics,
  checkStatus,
  activeMessage,
  index,
}) => {
  return (
    <div
      className={`d-flex justify-content-evenly ${
        activeMessage.itemMessage &&
        activeMessage.messageId === index &&
        outerActive
      }`}
    >
      <Avatar pics={pics} indicator={true} />
      <div className="mb-2">
        <div>
          <p className={nameText}>{name}</p>

          <p className={`text-muted ${messageText}`}>{message}</p>
        </div>

        <div className={`d-flex ${!checkStatus && "d-none"}`}>
          <div>
            <small className={checkStatus && checkStatus(socialMedia)}>
              {socialMedia}
            </small>
          </div>
          <div className="mx-2">
            <small className={checkStatus && checkStatus(status)}>
              {status}
            </small>
          </div>
        </div>
      </div>
      <div className={`${!checkStatus && "mb-3"}`}>
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
  );
};
