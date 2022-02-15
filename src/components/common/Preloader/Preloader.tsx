import React from "react";
import preloader from "../../../assets/images/preloader.gif";

let Preloader: React.FC = () => {
  return (
    <div>
      <img
        style={{
          backgroundColor: "white",
          width: "100px",
          borderRadius: "100%",
        }}
        src={preloader}
      />
    </div>
  );
};

export default Preloader;
