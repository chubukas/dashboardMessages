import { indicatordown } from "../components/css/inside.module.css";
import { avatar } from "../components/css/header.module.css";

export const Avatar = ({ pics, indicator }) => {
  return (
    <>
      {indicator ? (
        <div className="my-auto position-relative">
          <img className={avatar} src={pics} alt="avatar" />
          <span className={indicatordown}>&nbsp;</span>
        </div>
      ) : (
        <img className={avatar} src="/images/1.jpg" alt="avatar" />
      )}
    </>
  );
};
