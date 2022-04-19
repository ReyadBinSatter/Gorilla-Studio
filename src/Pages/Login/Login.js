import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import auth from './../../firebase.init';
import SocialLogin from './SocialLogin';
import Loading from './../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let errorElement;
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    if(loading || sending){
        return <Loading></Loading>
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
         if (email) {
          await sendPasswordResetEmail(email);
             toast('Sent email');
         }
         else{
             toast('please enter your email address');
         }
    }


    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }

    const gotoSignup = event => {
        navigate('/signup')
    }

    return (
        <div className='container w-50 mx-auto my-5'>
            <h1 className='text-center'>Please Login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="dark w-50 mx-auto d-block mb-2" type="submit">
                    Submit
                </Button>
            </Form>
            {errorElement}
            <p className='text-center'>If you are a new user <Link to="/signup" className='text-primary text-decoration-none' onClick={gotoSignup}>Please Sign up</Link></p>
            <p className='text-center'>Forgot password <Button className='btn btn-dark text-decoration-none' onClick={resetPassword}>Reset password</Button></p>
            <ToastContainer></ToastContainer>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;