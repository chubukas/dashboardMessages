import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "../context/index";

import { avatar } from "./css/header.module.css";

export const Header = ({ children }) => {
  const [appState, dispatch] = useAppContext();

  const { sideBarOpen } = appState;

  const sideBarToggle = () => {
    dispatch({ type: "SIDEBAROPEN", payload: !sideBarOpen });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
        <div className="container">
          <span className={`navbar-brand`}>Conversations</span>
          <button
            className="navbar-toggler"
            type="button"
            onClick={sideBarToggle}
          >
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
