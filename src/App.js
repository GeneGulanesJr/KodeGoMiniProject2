import React from 'react';
import {
    ChakraProvider,
    theme,
} from '@chakra-ui/react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import RegisterPage from './Pages/RegisterPage';
import HomePage from './Pages/Content/Homepage'

import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import LoginPage from "./Pages/LoginPage";
import Body from "./Pages/Content/Body";
import Review from "./Pages/Content/Review";
import Pricing from "./Pages/Content/Pricing";
import JoinUs from './Pages/Content/JoinUs';
import TeamList from './Pages/Content/TeamList';
import HireUs   from './Pages/Content/HireUs';
import ProjectList from './Pages/Content/ProjectList';
import JobList from './Pages/Content/JobList';


function App() {
    return (

        <Router>
            <ChakraProvider theme={theme}>
                <Navbar/>


                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/joinus" element={<JoinUs/>}/>
                    <Route path="/teamlist" element={<TeamList/>}/>
                    <Route path="/hireus" element={<HireUs/>}/>
                    <Route path="/projectlist" element={<ProjectList/>}/>
                    <Route path="/joblist" element={<JobList/>}/>
                </Routes>

            </ChakraProvider>
        </Router>


    );
}

export default App;
