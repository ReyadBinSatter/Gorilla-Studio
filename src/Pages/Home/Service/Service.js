import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, price, description,img } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`);
    }

    return (
        <div className='col-sm-12 col-md-6 col-lg-4'>
            <div className="card m-5">
                <div class="card-body">
                <img className='w-100' src={img} alt="" />
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">Price: {price} Tk.</p>
                    <p class="card-text">{description}</p>
                    <button onClick={() => navigateToServiceDetail(id)} className='btn btn-dark'>Service: {name}</button>
                </div>
            </div>
        </div>
    );
};

export default Service;