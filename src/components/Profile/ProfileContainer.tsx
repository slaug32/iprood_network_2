import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUserProfile,
  getUserStatus,
  updateUserStatus,
  savePhoto,
} from "../../redux/profile_reducer";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AuthRedirect } from "../../hoc/authRedirect";
import { compose } from "redux";
import { AppStateType } from "../../redux/redux_store";
import { ProfileType } from "../../types";

type MapStatePropsType = ReturnType<typeof mapStateToProps>;

type OwnPropsType = {
  getUserProfile: (userId: number) => void;
  getUserStatus: (userId: number) => void;
  updateUserStatus: (status: string) => void;
  savePhoto: (file: File) => void;
  profile: ProfileType;
};

type PathParams = {
  userId: string;
};

type PropsType = MapStatePropsType &
  OwnPropsType &
  RouteComponentProps<PathParams>;

class ProfileContainer extends React.Component<PropsType> {
  ProfileResult() {
    let userId: any = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  componentDidMount() {
    this.ProfileResult();
  }

  componentDidUpdate(prevProps: PropsType) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.ProfileResult();
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateUserStatus={this.props.updateUserStatus}
        savePhoto={this.props.savePhoto}
      />
    );
  }
}

let mapStateToProps = (state: AppStateType) => ({
  profile: state.profile.profile,
  status: state.profile.status,
  // authorizedUserId: state.auth.authorizedUserId,
});

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    getUserProfile,
    getUserStatus,
    updateUserStatus,
    savePhoto,
  }),
  withRouter
  // AuthRedirect
)(ProfileContainer);
