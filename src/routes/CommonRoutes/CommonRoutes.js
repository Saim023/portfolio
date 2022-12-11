import { createBrowserRouter } from "react-router-dom";
import ProjectOne from "../../pages/AllProjects/ProjectOne";
import ProjectThree from "../../pages/AllProjects/ProjectThree";
import ProjectTwo from "../../pages/AllProjects/ProjectTwo";
import Home from "../../pages/Home/Home";
import MainLayout from "./layouts/MainLayout/MainLayout";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
        ]
    },

    {
        path: '/project-one',
        element: <ProjectOne></ProjectOne>
    },
    {
        path: '/project-two',
        element: <ProjectTwo></ProjectTwo>
    },
    {
        path: '/project-three',
        element: <ProjectThree></ProjectThree>
    },
])