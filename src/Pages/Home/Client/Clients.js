import React, { useEffect, useState } from 'react';
import Client from './Client';

const Clients = () => {
    const [clients, setClients] = useState([]);

    useEffect(()=>{
        fetch('client.json')
        .then(res => res.json())
        .then(data => setClients(data))
    }, [])

    return (
        <div id='happy-client'>
            <h1 className='text-center mt-5'>Happy clients</h1>
            <div>
                <div className='row mx-auto'>
                {
                    clients.map(client => <Client
                        key = {client.id}
                        client={client}
                    >
                    </Client>)
                }
                </div>
            </div>
        </div>
    );
};

export default Clients;