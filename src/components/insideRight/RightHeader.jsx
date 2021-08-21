import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsAltH,
  faUser,
  faUserPlus,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

export const RightHeader = ({ smPhone }) => {
  const Icons = [faArrowsAltH, faUser, faUserPlus, faCheckCircle];

  const displayIcons = Icons.map((data, i) => (
    <div className={smPhone ? "col-2 mt-3 text-center" : "mx-3"} key={i}>
      <FontAwesomeIcon icon={data} />
    </div>
  ));

  return (
    <div className="d-md-flex">
      <div>
        <select
          name="select"
          id="select"
          className="form-select form-select-sm"
          araia-aria-label=".form-select-sm example"
        >
          <option value="">mark as closed</option>
          <option value="Open">Open</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Closed">Closed</option>
        </select>
      </div>
      <div className={`${smPhone ? "row" : "d-flex"}`}>{displayIcons}</div>
    </div>
  );
};
