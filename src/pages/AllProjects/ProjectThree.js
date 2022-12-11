import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import screen1 from '../../assets/images/project-2.png';
import screen2 from '../../assets/images/p3-s2.png';
import screen3 from '../../assets/images/p3-s3.png';

const ProjectThree = () => {
    return (
        <div>
            <Header></Header>
            <div className='min-h-screen bg-[#22252c] pt-20 pb-20'>
                <h1 className="text-color text-5xl text-center font-bold pb-16">PROJECT THREE</h1>

                <div className="hero ">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={screen1} className=" h-72 max-w-sm rounded-lg shadow-2xl" />
                        <img src={screen2} className=" h-72 max-w-sm rounded-lg shadow-2xl" />
                        <img src={screen3} className=" h-72 max-w-sm rounded-lg shadow-2xl" />
                        <div className='text-white pl-5'>
                            <h1 className="about-color">Aster Learning</h1>
                            <ul className=''>
                                <li>This project is mainly based on React JS.</li>
                                <li>Integrated Node JS and Express JS for the backend.</li>
                                <li>Integrated Node JS and Express JS for the backend.</li>
                                <li> Firebase for the authentication system.</li>
                                <li> MongoDB for the database system.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectThree;