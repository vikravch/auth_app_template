import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import AuthCard from '../component/AuthCard';
import AuthTitle from '../component/AuthTitle';
import { validateEmail, validatePassword } from '../../domain/use_case/validator';
import AuthSubmitButton from '../component/AuthSubmitButton';
import { type AppDispatch } from '../../../../general/redux/store';
import { signup } from '../redux/asyncActions';

const SignUpPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <AuthCard>
      <AuthTitle title="Create account!" backLink="/login" />
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errorsEmail = validateEmail(values.email);
          const errorsPassword = validatePassword(values.password);
          return { ...errorsEmail, ...errorsPassword };
        }}
        onSubmit={(values) => {
          void dispatch(signup(
            { username: values.email, password: values.password }
          ));
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="mb-3 row">
              <div className="col-sm-10">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
              </div>
            </div>
            <div className="col-12 p-2">
              <AuthSubmitButton text="Send" />
            </div>
          </form>
        )}
      </Formik>
    </AuthCard>
  );
};

export default SignUpPage;
