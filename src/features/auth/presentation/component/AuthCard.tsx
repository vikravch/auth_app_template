import React, {type PropsWithChildren} from 'react';

const AuthCard: React.FC<PropsWithChildren> = ({children}: PropsWithChildren) => (
    <div className="container">
        <div className="row gy-5 align-items-center">
            <div className="card col-md-6 col-xs-12 align-self-center offset-md-3 p-4">
                {children}
            </div>
        </div>
    </div>
);

export default AuthCard;
