import React from 'react';
import rbs from '../../img/profile/profile.jpg'
import './About.css';
const About = () => {
    return (
        <div className='about-me'>
            <img className='mx-auto d-block' src={rbs} alt="" />
            <h1 className='text-center'>I'm Reyad</h1>
 
           <h3 className='text-center'>My next goals are-</h3>
           <p className='text-center w-50 mx-auto'>
        Become an expert in programming languages JavaScript and Python.
            Strengthen data management skills by working with DBMS systems.
            Secure a position as a lead software engineer.
            Gain enough experience within my current role to be able to apply for senior engineer.
        </p>
            
            
        
        </div>
    );
};

export default About;