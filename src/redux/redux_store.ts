import { applyMiddleware, combineReducers, createStore } from "redux";
import profile from "./profile_reducer";
import dialogs from "./dialogs_reducer";
import sidebar from "./sidebar_reducer";
import usersR from "./users_reducer";
import auth from "./auth_reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as form } from "redux-form";
import app from "./app_reducer";

let reducers = combineReducers({
  profile,
  dialogs,
  sidebar,
  usersR,
  auth,
  form,
  app,
});

type RootReducerType = typeof reducers;

export type AppStateType = ReturnType<RootReducerType>;

export type GlobalActionsTypes<T> = T extends {
  [keys: string]: (...args: any[]) => infer U;
}
  ? U
  : never;

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store;

export default store;
