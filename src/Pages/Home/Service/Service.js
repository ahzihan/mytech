import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Helmet } from 'react-helmet-async';

const Service = ( { service } ) => {
    const { title, image, description } = service;
    return (
        <div className='cart-container container pt-5'>
            <Helmet>
                <title>Services - MyTech</title>
            </Helmet>
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title style={{ color: "#4D78EB" }}>{title}</Card.Title>
                    <Card.Text>
                        {description.slice( 0, 80 ) + '...'}
                    </Card.Text>
                    <Button className='btn-center' variant="primary">Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;