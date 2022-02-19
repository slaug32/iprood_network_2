import { PhotoType, PostsType, ProfileType } from "./../types";
import { ProfileAPI } from "../api/profileApi";
import { usersAPI } from "../api/usersApi";
import { GlobalActionsTypes } from "./redux_store";
import { Dispatch } from "redux";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: "Blabla", likesCount: 11 },
    { id: 4, message: "Dada", likesCount: 11 },
  ] as Array<PostsType>,
  profile: null as ProfileType | null,
  status: "" as string,
  newPostText: "" as string,
};

type initialStateType = typeof initialState;
type ActionsTypes = GlobalActionsTypes<typeof actions>;

const profileReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  switch (action.type) {
    case "ADD_POST": {
      let newPost = { id: 5, message: action.newPostText, likesCount: 0 };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }
    case "SET_USER_PROFILE": {
      return { ...state, profile: action.profile };
    }
    case "SET_USER_STATUS": {
      return { ...state, status: action.status };
    }
    case "SET_PHOTO_PROFILE": {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };
    }
    default:
      return state;
  }
};

export const actions = {
  setStatus: (status: string) =>
    ({
      type: "SET_USER_STATUS",
      status,
    } as const),
  addPostActionCreator: (newPostText: string) =>
    ({
      type: "ADD_POST",
      newPostText,
    } as const),
  setUserProfile: (profile: ProfileType) =>
    ({
      type: "SET_USER_PROFILE",
      profile,
    } as const),

  savePhotoSuccess: (photos: PhotoType) =>
    ({
      type: "SET_PHOTO_PROFILE",
      photos,
    } as const),
};

export const getUserProfile =
  (userId: number) => async (dispatch: Dispatch<ActionsTypes>) => {
    let data = await usersAPI.getProfile(userId);
    dispatch(actions.setUserProfile(data));
  };

export const getUserStatus =
  (userId: number) => async (dispatch: Dispatch<ActionsTypes>) => {
    let data = await ProfileAPI.getStatus(userId);
    dispatch(actions.setStatus(data));
  };

export const updateUserStatus =
  (status: string) => async (dispatch: Dispatch<ActionsTypes>) => {
    let data = await ProfileAPI.updateStatus(status);
    if (data.resultCode === 0) {
      dispatch(actions.setStatus(status));
    }
  };

export const savePhoto =
  (file: any) => async (dispatch: Dispatch<ActionsTypes>) => {
    let data = await ProfileAPI.savePhoto(file);
    if (data.resultCode === 0) {
      dispatch(actions.savePhotoSuccess(data.data.photos));
    }
  };

export default profileReducer;
