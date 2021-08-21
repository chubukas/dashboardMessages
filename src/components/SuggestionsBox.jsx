import {
  suggestions,
  replayName,
  avatarNameGreen,
} from "../components/css/inside.module.css";

import { MessageName } from "./MessageName";

export const SuggestionBox = ({ UsersSearch }) => {
  const searchedUsers = UsersSearch.map(({ userName, userEmail }, i) => (
    <div key={i}>
      <MessageName
        removeReciever={true}
        userName={userName}
        userEmail={userEmail}
        colorText={avatarNameGreen}
      />
    </div>
  ));
  return (
    <div className={`shadow ${suggestions}`}>
      <p className={`${replayName} fw-bolder`}>Suggested contants</p>
      <div>{searchedUsers}</div>
    </div>
  );
};
