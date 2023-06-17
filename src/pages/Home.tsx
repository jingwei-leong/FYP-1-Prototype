import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PAGES } from '../App';
import Button from 'react-bootstrap/Button'
import '../App.css';


const Home = () => {
    return (
      <div className='applybg' style={{backgroundImage: 'url(https://images.unsplash.com/photo-1574218732130-6b19257fd9db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80)'}}>
            <div className='container top-0 start-0 bottom-0 end-0 m-auto d-flex flex-column align-items-center justify-content-center'>
                <div className='mb-3'>
                    <img className='img-fluid' style={{height: 130, width:310}} src='https://cdn.discordapp.com/attachments/884286544637206528/1119470502365376602/logo.png' alt='logo'></img>
                </div>
                <div className='mb-4'>
                    <h1>AI Property Recommendation System</h1>
                </div>
                <div className='mb-5 mx-5 fw-bold' style={{fontSize: 18, textAlign: 'center'}}>
                    This propery recommendation system uses popular AI techniques like machine learning and deep learning to come out with a list of properties that matches your needs as well as preferences. Our intention is to save your time and effort on property search.
                </div>
                <div className='mb-4 fw-semibold'  style={{fontSize: 18, textAlign: 'center'}}>
                    By clicking the button below, you allow us to collect some of your personal information, all the collected data will be kept confidentially.
                </div>
                <div className='mb-5'>
                    <Link to={PAGES.FORM} className="" title='Start searching'><Button className='btn btn-warning text-dark' style={{fontSize: 18, textAlign: 'center', borderRadius: '10px'}}>Click here to start searching for your ideal property</Button></Link>
                </div>
            </div>
      </div>
    );
};

export default Home;