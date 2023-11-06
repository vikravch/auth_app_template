import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import AuthCard from '../component/AuthCard';
import AuthTitle from '../component/AuthTitle';
import { validateEmail } from '../../domain/use_case/validator';
import AuthSubmitButton from '../component/AuthSubmitButton';
import { type AppDispatch } from '../../../../general/redux/store';
import { forgotPassword } from '../redux/asyncActions';

const ForgotPasswordPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <AuthCard>
      <AuthTitle title="Forgot password!" backLink="/login" />
      <Formik
        initialValues={{ email: '' }}
        validate={(values) => validateEmail(values.email)}
        onSubmit={(values) => {
          void dispatch(forgotPassword({ username: values.email }));
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
            <div className="col-12 p-2">
              <AuthSubmitButton text="Send" />
            </div>
          </form>
        )}
      </Formik>
    </AuthCard>
  );
};

export default ForgotPasswordPage;
