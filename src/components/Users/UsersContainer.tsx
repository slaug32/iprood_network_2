import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, getUsers } from "../../redux/users_reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { AuthRedirect } from "../../hoc/authRedirect";
import { compose } from "redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsersSelector,
} from "../../redux/users_selectors";
import { AppStateType } from "../../redux/redux_store";
import { UsersType } from "../../types";

type MapStatePropsType = {
  currentPage: number;
  pageSize: number;
  isFetching: boolean;
  totalUsersCount: number;
  users: Array<UsersType>;
  followingInProgress: Array<number>;
};

type MapDispatchPropsType = {
  getUsers: (currentPage: number, pageSize: number) => void;
  unfollow: (userId: number) => void;
  follow: (userId: number) => void;
};

type OwnPropsType = {
  getUsers: (currentPage: number, pageSize: number) => void;
  isFetching: boolean;
};

class UsersContainer extends React.Component<
  OwnPropsType & MapStatePropsType & MapDispatchPropsType
> {
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users />
      </>
    );
  }
}

let mapStateToProps = (state: AppStateType) => {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose<React.ComponentType>(
  AuthRedirect,
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
    mapStateToProps,
    {
      follow,
      unfollow,
      getUsers,
    }
  )
)(UsersContainer);
