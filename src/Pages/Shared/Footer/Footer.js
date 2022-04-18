import React from 'react';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5 py-2 bg-dark'>
            <p className='text-light m-0'><small>copyright © {year} </small></p>
        </footer>

    );
};

export default Footer;