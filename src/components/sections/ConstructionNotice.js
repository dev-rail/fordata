import React from "react";
import construction from "../../asset/img/website-under-construction.jpg";
const ConstructionNotice = ({ setNotice }) => {
  return (
    <div className="construction">
      <div>
        <img src={construction} alt="underconstruction" />
        {/* <button onClick={() => setNotice(false)}>Ok</button> */}
      </div>
    </div>
  );
};

export default ConstructionNotice;
