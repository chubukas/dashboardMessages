import { MessageDisplay } from "./MessageDisplay";
import { insideRightMain, messageBottomMargin } from "../css/inside.module.css";
import { InputMessage } from "./InputMessage";

export const InsideRight = (messages) => {
  return (
    <div className={insideRightMain}>
      <div className={messageBottomMargin}>
        <MessageDisplay data={messages} />
      </div>
      <div>
        <InputMessage />
      </div>
    </div>
  );
};
