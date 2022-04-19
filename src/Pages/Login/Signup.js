import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from './../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from './SocialLogin';

const Signup = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        //loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    if(user){
        navigate('/login')
    }
    const handleSignup = async (event) => {
        event.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(email, password);
        console.log(name,email,password)
    }

    const gotoLogin = () => {
        navigate('/login')
    }
    return (
        <div className='container w-50 mx-auto my-5'>
            <h1>Please Signup</h1>
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

                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
            <p>If you have a account <Link to="/login" className='text-danger text-decoration-none' onClick={gotoLogin}>Goto Signup</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Signup;