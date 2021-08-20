import { main } from "./css/inside.module.css";
import { InsideLeft } from "./insideLeft";
import { InsideRight } from "./insideRight";
import { data } from "../data/data";

export const Inside = () => {
  const { messages } = data;
  return (
    <div className={main}>
      <div>
        <div className="row">
          <div className="col-md-3">
            <InsideLeft />
          </div>
          <div className="col-md-8">
            <InsideRight messages={messages} />
          </div>
        </div>
      </div>
    </div>
  );
};
