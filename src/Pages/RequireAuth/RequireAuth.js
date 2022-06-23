import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Share/Loading/Loading';

const RequireAuth = ( { children } ) => {
    const [ user, loading ] = useAuthState( auth );
    const location = useLocation();

    if ( loading ) {
        return <Loading></Loading>;
    }

    if ( !user ) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if ( !user.emailVerified ) {
        return <div className='text-center'>
            <h3 className='text-danger'>Your email is not varified!!</h3>
            <h6>Please, Verify Your Email.</h6>
            <button className='btn btn-primary mb-3'>Send Verify Code Again</button>
        </div>;
    }
    return children;
};

export default RequireAuth;