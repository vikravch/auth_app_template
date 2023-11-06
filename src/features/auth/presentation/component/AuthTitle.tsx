import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import {Link} from "react-router-dom";

interface Props {
  title: string,
  backLink: string
}
const AuthTitle: React.FC<Props> = ({ title, backLink }: Props) => (
    <div>
        <Link to={backLink}>
            <Icon.ArrowLeft size={24} className="text-center" />
        </Link>
      <h1 className="col-12 text-center p-2">{title}</h1>
    </div>
);

export default AuthTitle;
