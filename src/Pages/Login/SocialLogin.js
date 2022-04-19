import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import google from '../../img/social/google.png'
import auth from './../../firebase.init';
import { useNavigate } from 'react-router-dom';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error) {
       
    errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
      }
    if (user) {
        navigate('/home');
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-3 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            <div>
            <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-dark w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
            {errorElement}
        </div>
    );
};

export default SocialLogin;