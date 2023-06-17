import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PAGES } from '../App';

const Form = () => {

    const submitHandler = (e: any) => {
        console.log("Form submitted!");
    }

    return (
        <div style={{ height: '100vh', backgroundColor: '#FDEBD0', overflow: 'auto' }}>
            <div className='container top-0 start-0 bottom-0 end-0 m-auto d-flex flex-column align-items-center justify-content-center text-center overflow-auto'>
                <div>
                    <form>
                        <h3 className='mb-5'>Please fill up the information below.</h3>
                        <div className='row mb-3'>
                            <div className='col'>
                                <label htmlFor="age" className='fw-bold'>Age: </label>
                            </div>
                            <div className='col'>
                                <input type='number' id="age" name="age"></input>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col'>
                                <label className='fw-bold'>Gender:</label>
                            </div>
                            <div className='col'>
                                <input type="radio" id="male" name="gender" value="male"></input>
                                <label htmlFor="male" className='me-4'> Male</label>
                                <input type="radio" id="female" name="gender" value="female"></input>
                                <label htmlFor="female">Female</label>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col'>
                                <label htmlFor="race" className='fw-bold'>Race: </label>
                            </div>
                            <div className='col'>
                                <select name="race" id="race" style={{ width: '185px' }}>
                                    <option value="Malay">Malay</option>
                                    <option value="Chinese">Chinese</option>
                                    <option value="Indian">Indian</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col'>
                                <label htmlFor="bumiputera" className='fw-bold'>Bumiputera? </label>
                            </div>
                            <div className='col'>
                                <input type="checkbox" id="bumiputera" name="yes" value="yes"></input>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col'>
                                <label htmlFor="maritalstatus" className='fw-bold'>Marital Status: </label>
                            </div>
                            <div className='col'>
                                <select name="maritalstatus" id="maritalstatus" style={{ width: '185px' }}>
                                    <option value="single">Single</option>
                                    <option value="married">Married</option>
                                    <option value="widowed">Widowed</option>
                                    <option value="divorced">Divorced</option>
                                </select>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col'>
                                <label htmlFor="incomerange" className='fw-bold'>Income Range: </label>
                            </div>
                            <div className='col'>
                                <select name="incomerange" id="incomerange" style={{ width: '185px' }}>
                                    <option value="single">Below RM2000</option>
                                    <option value="married">RM2000-RM4000</option>
                                    <option value="widowed">RM4000-RM6000</option>
                                    <option value="divorced">More than RM6000</option>
                                </select>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col'>
                                <label htmlFor="numberofroom" className='fw-bold'>Number of rooms: </label>
                            </div>
                            <div className='col'>
                                <select name="numberofroom" id="numberofroom" style={{ width: '185px' }}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                        </div>
                        <div className='row mb-5'>
                            <div className='col'>
                                <label htmlFor="numberofbathroom" className='fw-bold'>Number of bathrooms:</label>
                            </div>
                            <div className='col'>
                                <select name="numberofbathroom" id="numberofbathroom" style={{ width: '185px' }}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                        </div>

                        <Link to={PAGES.RESULT} className="" title='Result Page'><Button type='submit' className='btn btn-warning text-dark' style={{ fontSize: 18, textAlign: 'center', borderRadius: '10px' }} onSubmit={submitHandler}>Submit</Button></Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;