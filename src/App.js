import React from 'react';
import {
    ChakraProvider,
    theme,
} from '@chakra-ui/react';
import {BrowserRouter  as Router,Route,Routes} from 'react-router-dom';
import RegisterPage from './Pages/RegisterPage';
import HomePage from './Pages/Content/Homepage'

import Navbar from "./Component/Navbar";
import LoginPage from "./Pages/LoginPage";

function App() {
    return (

            <Router>
                <ChakraProvider theme={theme}>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                </Routes>
                </ChakraProvider>
            </Router>



    );
}

export default App;
