import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    
    const { serviceId } = useParams();
    return (
        <div>
            <h2 className='text-center m-5'>Package {serviceId} Selected</h2>
            <div className='text-center'>
                <Link to="/buyPackage">
                    <button className='btn btn-dark'>Buy the Package</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;
