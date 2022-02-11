import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        <div>
          <ProfileStatus />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
