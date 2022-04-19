import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from './../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from './SocialLogin';
import Loading from './../Shared/Loading/Loading';

const Signup = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    if(user){
        navigate('/login')
    }
    if(loading || updating){
        return <Loading></Loading>
    }
    const handleSignup = async (event) => {
        event.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/home');
    }

    const gotoLogin = () => {
        navigate('/login')
    }
    return (
        <div className='container w-50 mx-auto my-5'>
            <h1  className='text-center'>Please Signup</h1>
            <Form onSubmit={handleSignup}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={nameRef} type="name" placeholder="Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password(At least 6 character)" required />
                </Form.Group>

                <Button variant="dark w-50 mx-auto d-block mb-2" type="submit">
                    Submit
                </Button>
            </Form>
            <p className='text-center'>If you have a account <Link to="/login" className='text-primary text-decoration-none' onClick={gotoLogin}>Goto Sign in</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Signup;