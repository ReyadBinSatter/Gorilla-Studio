import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Client = ({ client }) => {
    const { time, name, description } = client;
    return (
        <div className='w-25 mx-auto my-5'>
            <CardGroup>
                <Card>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated {time} mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Client;