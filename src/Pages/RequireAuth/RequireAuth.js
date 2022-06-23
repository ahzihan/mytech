import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Share/Loading/Loading';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { ToastContainer,toast } from 'react-toastify';

const RequireAuth = ( { children } ) => {
    const [ user, loading ] = useAuthState( auth );
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

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
            <button onClick={async () => {
          await sendEmailVerification();
          toast('Email sending, please check your mail.');
        }} className='btn btn-primary mb-3'>Send Verify Code Again</button>
        <ToastContainer />
        </div>;
    }
    return children;
};

export default RequireAuth;