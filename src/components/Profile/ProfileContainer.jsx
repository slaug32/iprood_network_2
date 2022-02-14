import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUserProfile,
  getUserStatus,
  updateUserStatus,
  savePhoto,
} from "../../redux/profile_reducer";
import { withRouter } from "react-router-dom";
import { AuthRedirect } from "../../hoc/authRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  ProfileResult() {
    let userId = this.props.match.params.userId;
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

  componentDidUpdate(prevProps, prevState, params) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.ProfileResult();
    }
  }

  render() {
    return (
      <Profile
        isOwner={!this.props.match.params.userId}
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateUserStatus={this.props.updateUserStatus}
        savePhoto={this.props.savePhoto}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profile.profile,
  status: state.profile.status,
});

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getUserStatus,
    updateUserStatus,
    savePhoto,
  }),
  withRouter
  // AuthRedirect
)(ProfileContainer);
