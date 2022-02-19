import React from "react";
import { reduxForm, Field, InjectedFormProps } from "redux-form";

const addPostForm: React.FC<InjectedFormProps> = (props) => {
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
