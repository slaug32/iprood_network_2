import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

const usersSearchForm = (values: any) => {
  const errors = {};
  return errors;
};

type UsersSearchNameType = {
  term: string;
};

const UsersSearchFormik = () => {
  const submit = (
    values: UsersSearchNameType,
    { setSubmitting }: { setSubmitting: (setSubmitting: boolean) => void }
  ) => {
    setTimeout(() => {
      //   alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <Formik
      initialValues={{ term: "" }}
      validate={usersSearchForm}
      onSubmit={submit}>
      {({ isSubmitting }) => (
        <Form>
          <Field type='text' name='term' />
          <ErrorMessage name='email' component='div' />
          <Field type='password' name='password' />
          <ErrorMessage name='password' component='div' />
          <button type='submit' disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default UsersSearchFormik;
