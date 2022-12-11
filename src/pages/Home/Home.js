import React from 'react';

const Home = () => {
    return (
        <div className=' h-screen px-16'>
            <h1 className='text-white lg:text-[10rem] md:text-[7rem] sm:text-[4rem]'>Hello!</h1>
            <h1 className='text-white lg:text-[5rem] md:text-[4rem] sm:text-[2rem] '>I'm Md. Saim Hossain</h1>
            <h1 className='text-white lg:text-[2rem] md:text-[2rem] sm:text-[1rem] mb-16'>Junior Web Developer</h1>
            <a href="Resume-Md.Saim_Hossain.pdf" download='Resume-Md.Saim_Hossain.pdf'>
                <button className='resume-button'>Download Resume</button>
            </a>
        </div>
    );
};

export default Home;