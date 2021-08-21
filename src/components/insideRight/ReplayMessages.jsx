import { avatar } from "../css/header.module.css";
import {
  nameText,
  messageText,
  headerText,
  avatarName,
  replayName,
} from "../css/inside.module.css";
import { createNameAcronym } from "../../util/createNameAcronym";

export const ReplayMessages = ({ replies }) => {
  const { pics, name, socialMedia, time, replayMessage, date } = replies;
  return (
    <div>
      <div>
        <div className="d-flex">
          <div>
            {pics ? (
              <img className={avatar} src={pics} alt="avatar" />
            ) : (
              <span className={avatarName}>{createNameAcronym(name)}</span>
            )}
          </div>
          <div className="mx-2 mx-md-4">
            <p className={`${nameText} ${replayName}`}>
              {name} <span className="text-muted">replied</span>
            </p>
            <p className={`${messageText} text-muted`}>{`${
              socialMedia && `via ` + socialMedia
            } (${time})`}</p>
          </div>
        </div>
        <div className={`text-muted ${headerText}`}>
          <pre>{replayMessage}</pre>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};
