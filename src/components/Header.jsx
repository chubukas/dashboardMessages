import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "../context/index";

import { avatar } from "./css/header.module.css";
import { indicatorTop, clickable } from "./css/inside.module.css";

export const Header = ({ children }) => {
  const [appState, dispatch] = useAppContext();

  const { sideBarOpen } = appState;

  const sideBarToggle = () => {
    dispatch({ type: "SIDEBAROPEN", payload: !sideBarOpen });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 mb-2 mb-md-0">
        <div className="container">
          <span className="navbar-brand text-muted">Conversations</span>
          <button
            className="navbar-toggler"
            type="button"
            onClick={sideBarToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div>
            <span className={`mx-4 text-muted ${clickable}`}>
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <span className={`position-relative text-muted ${clickable}`}>
              <FontAwesomeIcon icon={faBell} />
              <span className={indicatorTop}>&nbsp;</span>
            </span>
            <span className={`mx-4 ${clickable}`}>
              <img className={avatar} src="/images/1.jpg" alt="avatar" />
            </span>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
};
