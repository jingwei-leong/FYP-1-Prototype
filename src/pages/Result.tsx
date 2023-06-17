import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PAGES } from '../App';

export interface propertyDataFormat {
    name: string
    imgSource: string;
    description: string;
    website: string
}

export const propertyResultsArr: propertyDataFormat[] = [
    {
        name: 'EdgeWood Residences @ SkySanctuary, Setapak',
        imgSource: 'https://skyworldgroup.com.my/_next/image?url=%2Fskyproperty%2Fskysignature%2Fgoing%2Fimg-1.jpg&w=1080&q=75',
        description: 'A nature-inspired Township in Setapak, surrounded by refreshing green plants, providing you a comfortable living.',
        website: 'https://skyworld.my/edgewood/'
    },
    {
        name: 'SkyAwani 3 Residences @ Setapak',
        imgSource: 'https://skyworldgroup.com.my/_next/image?url=%2Fskyproperty%2Fawani%2Fcomplete%2Fimg-1.jpg&w=3840&q=75',
        description: 'Strategic location which is only a stone\'s throw away from Kuala Lumpur city center.',
        website: 'https://sw.skyworld.my/skyawani-reg/'
    },
    {
        name: 'SkyVogue Residences @ Taman Desa',
        imgSource: 'https://skyworldgroup.com.my/_next/image?url=%2Fskyproperty%2Fskysignature%2Fgoing%2Fimg-3.jpg&w=1920&q=75',
        description: 'At SkyVogue Residences, the living area is often the focal point of social gatherings and it is where pivotal moments take place. The wide living area feels even more immense with a sizeable balcony that creates a truly inviting and inspiring space.',
        website: 'https://skyworld.my/skyvogue/'
    },
]

const Result = () => {
    return (
        <div className='applybg' style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1546448396-6aef80193ceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80)' }}>
            <div className='d-flex flex-column align-items-center justify-content-center m-5' >
                <h1 className='mb-3'>Here are some recommendations for you!</h1>
                <h5 className='mb-3'>You might be interested in the properties below </h5>
                {propertyResultsArr.map((property) =>
                    <div className="card mb-3" style={{ maxWidth: '730px' }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={property.imgSource} className="img-fluid rounded-start" alt={property.name}></img>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{property.name}</h5>
                                    <p className="card-text">{property.description}</p>
                                    <div className='d-flex flex-column align-items-center justify-content-center'>
                                        <Button className='btn btn-warning text-dark' style={{ textAlign: 'center', borderRadius: '10px' }} title='Learn more' onClick={() => window.open(property.website)}>Check it out</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <Link to={PAGES.HOME} className="" title='Home Page'><Button className='btn btn-warning text-dark' style={{ fontSize: 18, textAlign: 'center', borderRadius: '10px' }}>Back to homepage</Button></Link>
            </div>
        </div>
    );
};

export default Result;