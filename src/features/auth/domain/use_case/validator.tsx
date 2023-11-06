export interface Errors {
  email?: string
  password?: string
}
export function validateEmail(email: string): Errors {
  const errors: Errors = {};
  if (email === '') {
    errors.email = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
  ) {
    errors.email = 'Invalid email address';
  }
  return errors;
}
export function validatePassword(password: string): Errors {
  const errors: Errors = {};
  if (password === '') {
    errors.password = 'Required';
  } else if (password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  }
  return errors;
}
