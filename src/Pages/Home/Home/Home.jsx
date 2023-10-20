import React from 'react';
import Dentist from '../../../components/Dentist/Dentist';
import LatestBlog from '../../../components/LatestBlog/LatestBlog';
import Service from '../../../components/Service/Service';
import Chatbot from '../../Chatbot/Chatbot';
import About from '../About/About';
import Appoinment from '../Appoinment/Appoinment';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';

const Home = () => {

    return (
        <>
            
           <Banner />
           <About />
           <Service />
           <Dentist />
           <Appoinment />
           <Gallery />
           <LatestBlog />
           <Chatbot />
           
        </>
    );
};

export default Home;