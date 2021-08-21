import { avatar } from "../css/header.module.css";
import { RightHeader } from "./RightHeader";
import { ReplayMessages } from "./ReplayMessages";
import {
  nameText,
  messageText,
  notificationBorder,
  headerText,
} from "../css/inside.module.css";

export const MessageDisplay = ({ data }) => {
  const {
    name,
    socialMedia,
    time,
    subject,
    TicketId,
    pics,
    mainMessage,
    replies,
  } = data.messages;

  const replayMessages = replies.map((data, i) => (
    <ReplayMessages key={i} replies={data} />
  ));

  return (
    <>
      <div className={`d-flex justify-content-between ${notificationBorder}`}>
        <div>
          <div className="d-flex">
            <div>
              <img className={avatar} src={pics} alt="avatar" />
            </div>
            <div className="mx-3">
              <p className={nameText}>{name}</p>
              <p className={`${messageText} text-muted`}>{`${
                socialMedia && `via ` + socialMedia
              } (${time})`}</p>
            </div>
          </div>
          <div className="mt-3 ">
            <p className={nameText}>{subject}</p>
            <p className={`${messageText} text-muted mb-2`}>
              Ticket ID: {TicketId}
            </p>
          </div>
        </div>
        <div className="d-none d-md-block">
          <RightHeader />
        </div>
      </div>

      <div className={`my-3 text-muted ${headerText} ${notificationBorder}`}>
        <pre>{mainMessage}</pre>
      </div>
      <div>{replayMessages}</div>
    </>
  );
};