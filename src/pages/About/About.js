import React from 'react';
import profile from '../../assets/images/profile.png';
import '../../background1.css';
import { BeakerIcon } from '@heroicons/react/24/solid';
import facebook from '../../assets/logo/unnamed.png';
import twitter from '../../assets/logo/twitter.png';
import linkedin from '../../assets/logo/linkedin.png';
import github from '../../assets/logo/github.png';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className=" min-h-screen bg-[#22252c] text-white lg:px-28 lg:pt-20 sm:px-10 p-12">
                <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-12 sm:px-12 items-center">
                    <div>
                        <img src={profile} className=" sm:mt-20 md:mt-20 w-5/6 lg:w-4/5 md:w-4/5 sm:w-4/5 rounded-full shadow-2xl" />
                        <div className=' lg:pl-16 mt-12 flex items-center content-center gap-6'>
                            <a href="https://www.facebook.com/saimhossain023" target='_blank'>
                                <img src={facebook} className='w-20' alt="" />
                            </a>
                            <a href="https://twitter.com" target='_blank'>
                                <img src={twitter} className='w-12' alt="" />
                            </a>
                            <a href="https://www.linkedin.com/in/saim-hossain/" target='_blank'>
                                <img src={linkedin} className='w-12' alt="" />
                            </a>
                            <a href="https://github.com/Saim023" target='_blank'>
                                <img src={github} className='w-12 bg-white rounded-[24px]' alt="" />
                            </a>
                        </div>

                    </div>

                    <div>
                        <h1 className="text-color text-5xl font-bold">ABOUT ME</h1>
                        <p>Hello! I’m Md. Saim Hossain. I'm Junior Web Developer with over 1 year of experience. I have depth knowledge of  HTML5, CSS3, JavaScript, React JS, Angular JS, Bootstrap5, Tailwind, MongoDB, Firebase and so on.</p>
                        <ul className='mt-6 text-2xl'>
                            <li>
                                <span className='about-color'>NAME: </span>
                                Md. Saim Hossain
                            </li>
                            <li>
                                <span className='about-color'>DATE OF BIRTH: </span>
                                5 February 1996
                            </li>
                            <li>
                                <span className='about-color'>NATIONALITY: </span>
                                Citizen of Bangladesh
                            </li>
                            <li>
                                <span className='about-color'>ADDRESS: </span>
                                Natore, Rajshahi
                            </li>
                            <li>
                                <span className='about-color'>PHONE: </span>
                                +8801739102377
                            </li>
                            <li>
                                <span className='about-color'>E-MAIL: </span>
                                saimhossain023@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;