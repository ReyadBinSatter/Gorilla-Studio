import React from 'react';

const Blogs = () => {
    return (
        <div className='m-5'>
            <h1 className='text-center'>QnA</h1>
            <div className=' my-5 text-justify'>
            <h3>Difference between Authorization and Authentication?</h3>
            <p>Authentication is the process where we verify if the user is already known to the website or not. Suppose a user is already registered on a particular website, using the authentication process will investigate whether it's true or not. on the other hand, authorization is the part that the user is allowed to see. It verifies what specific applications, files, and data a user has access to. </p>
            <h3>What other services does firebase provides other than authentication?</h3>
            <p>Firebase is known for providing authentication protection. However, there are multiple uses of it. Things like; Cloud Firestore, Cloud Functions, Hosting, Cloud Storage, Google Analytics, Predictions, Cloud Messaging, Dynamic Links, Remote Config. Since most of them are free there is a lot of users using firebase.</p>
            </div>
            
        </div>
    );
};

export default Blogs;