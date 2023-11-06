import React from 'react';

interface Props {
  text: string
}
const AuthSubmitButton: React.FC<Props> = ({ text }: Props) => (
  <button
    type="submit"
    className="btn btn-primary align-self-center"
  >
    {text}
  </button>
);

export default AuthSubmitButton;
