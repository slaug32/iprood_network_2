import React from "react";
import { reduxForm, Field } from "redux-form";
// import Field from "redux-form/lib/Field";
// import s from "./MyPosts.module.css";

const addPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name='newPostText' component='textarea' placeholder='yur post' />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const PostReduxForm = reduxForm({
  form: "post",
})(addPostForm);

export default PostReduxForm;
