import React from 'react';
import project1 from '../../assets/images/iphone-2.5e7b50f264c8e9305682.jpg';
import project2 from '../../assets/images/wedding-10.897403554a87dc2841e8.jpg';
import project3 from '../../assets/images/python.7515bc8c2f74c86381c2.jpg';
import '../../../src/background1.css';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className=' w-full bg-[#313741] lg:p-14 lg:pb-36 p-8'>
            <h1 className='text-color text-center py-12'>MY WORKS</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12'>
                <div className="card card-compact bg-[#22252c] text-white  shadow-xl">
                    <figure><img src={project1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"><span className='about-color'> Project Name: </span>Phone Planet</h2>
                        <p>This project is mainly based on React JS. I integrated Node JS and Express JS for the backend,
                            Firebase for the authentication system and MongoDB for the database system.
                        </p>
                        <div className="card-actions justify-end">
                            <Link to='/project-one' className='resume-button pt-5'>See Details</Link>

                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-[#22252c] text-white  shadow-xl">
                    <figure><img className='h-[238px] w-full' src={project2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"><span className='about-color'> Project Name: </span>Aster Wedding  </h2>
                        <p>This project is mainly based on React JS. Integrated: Firebase, MongoDB, Node JS, Express JS
                        </p>
                        <div className="card-actions justify-end">
                            <Link to='/project-two' className='resume-button pt-5'>See Details</Link>

                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-[#22252c] text-white shadow-xl">
                    <figure><img src={project3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"><span className='about-color'> Project Name: </span>Aster Learning   </h2>
                        <p>	Based on React JS Integrated: Firebase, React Bootstrap
                        </p>
                        <div className="card-actions justify-end">
                            <Link to='/project-three' className='resume-button pt-5'>See Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;