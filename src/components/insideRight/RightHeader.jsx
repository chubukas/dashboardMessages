import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsAltH,
  faUser,
  faUserPlus,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

export const RightHeader = () => {
  const Icons = [faArrowsAltH, faUser, faUserPlus, faCheckCircle];

  const displayIcons = Icons.map((data, i) => (
    <div className="mx-3" key={i}>
      <FontAwesomeIcon icon={data} />
    </div>
  ));

  return (
    <div className="d-flex">
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
      {displayIcons}
    </div>
  );
};
