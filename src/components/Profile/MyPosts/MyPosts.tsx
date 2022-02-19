import React from "react";
import { InjectedFormProps } from "redux-form";
import { PostsType } from "../../../types";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import PostReduxForm from "./PostForm";

export type MapPropsType = { posts: Array<PostsType> };
export type DispatchPropsType = { addPost: (newPostText: string) => void };

const MyPosts: React.FC<
  InjectedFormProps & MapPropsType & DispatchPropsType
> = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let SubmitForm = (values: any) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <PostReduxForm onSubmit={SubmitForm} />
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
