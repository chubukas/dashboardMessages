import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { avatar, brandName } from "./css/header.module.css";

export const Header = ({ children }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
        <div className="container-fluid">
          <span className={`navbar-brand  ${brandName}`}>Conversations</span>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div>
            <span className="mx-5">
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <span>
              <FontAwesomeIcon icon={faBell} />
            </span>
            <span className="mx-5">
              <img className={avatar} src="/images/1.jpg" alt="avatar" />
            </span>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
};
