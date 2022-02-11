import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import PostReduxForm from "./PostForm";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  //   let newPostElement = React.createRef();

  //   let onAddPost = () => {

  //   };

  //   let onPostChange = () => {
  //     let text = newPostElement.current.value;
  //     props.updateNewPostText(text);
  //   };

  let SubmitForm = (values) => {
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
