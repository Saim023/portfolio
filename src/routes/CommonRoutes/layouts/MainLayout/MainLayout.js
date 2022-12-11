import React from 'react';
import { Outlet } from 'react-router-dom';
import About from '../../../../pages/About/About';
import Contact from '../../../../pages/Contact/Contact';
import Projects from '../../../../pages/Projects/Projects';
import Footer from '../../../../pages/Shared/Footer/Footer';
import Header from '../../../../pages/Shared/Header/Header';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;