import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo.";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
// import { ProfileType } from "../../types";

// export type PropsType = {
//   isOwner: boolean;
//   profile: ProfileType | null;
//   status: string;
//   savePhoto: any;
//   updateUserStatus: (status: string) => void;
// };: React.FC<PropsType>

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateUserStatus={props.updateUserStatus}
        savePhoto={props.savePhoto}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
