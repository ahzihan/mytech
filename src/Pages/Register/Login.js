import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Share/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import PageTitle from '../Share/PageTitle/PageTitle';

const Login = () => {
    const [ email, setEmail ] = useState( '' );
    const location = useLocation();
    const [ signInWithEmailAndPassword, user, loading, error ] = useSignInWithEmailAndPassword( auth );
    const [ sendPasswordResetEmail, sending, error2 ] = useSendPasswordResetEmail( auth );
    const navigate = useNavigate();

    if ( loading || sending ) {
        return <Loading></Loading>;
    }

    const from = location.state?.from?.pathname || "/";

    if ( user ) {
        navigate( from, { replace: true } );
    }
    const handleEmail = event => {
        setEmail( event.target.value );
    };
    const passwordReset = async () => {
        if ( email ) {
            await sendPasswordResetEmail( email );
            toast( 'Send Email.., Check your mail.' );
        } else {
            toast( 'Please Enter Your Email' );
        }
    };



    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        setEmail( email );
        const password = event.target.password.value;
        signInWithEmailAndPassword( email, password );
        toast( 'Loged in successfully.' );
    };
    return (
        <Form onSubmit={handleLogin} className='w-50 mx-auto py-5'>
            <PageTitle title='Login'></PageTitle>
            <h3 style={{ color: "#4D78EB" }} className='text-center'>Login</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={handleEmail} name="email" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>
            <p>New in this website? <Link to="/register">Register</Link></p>
            <p>Forget Password? <button onClick={passwordReset} className='btn btn-link'>Forget</button></p>
            <ToastContainer />
        </Form>
    );
};

export default Login;