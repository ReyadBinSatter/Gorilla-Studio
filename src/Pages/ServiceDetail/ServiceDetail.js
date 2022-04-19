import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    
    const { serviceId } = useParams();
    return (
        <div>
            <h2 className='text-center m-5'>Package {serviceId} Selected</h2>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-success'>Proceed to Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;
