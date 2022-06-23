import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../src/firebase.init';
import Loading from '../Share/Loading/Loading';
import PageTitle from '../Share/PageTitle/PageTitle';

const Register = () => {
    const navigate = useNavigate();
    const [ createUserWithEmailAndPassword, user, loading, error ] = useCreateUserWithEmailAndPassword( auth, { sendEmailVerification: true } );


    if ( loading ) {
        return <Loading></Loading>;
    }

    if ( user ) {
        navigate( '/' );
    }
    const handleFormSubmit = event => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPass = event.target.c_password.value;

        if ( password !== confirmPass ) {
            return;
        }
        createUserWithEmailAndPassword( email, password );
        toast( 'User created successfully.' );
    };

    return (
        <Form onSubmit={handleFormSubmit} className='w-50 mx-auto py-5'>
            <PageTitle title='Register'></PageTitle>
            <h3 style={{ color: "#4D78EB" }} className='text-center'>Register</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control name="c_password" type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Accept terms and conditions" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button>
            <p>Already have an account? <Link to="/login">Login</Link></p>
            <ToastContainer />
        </Form>
    );
};

export default Register;