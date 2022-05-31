import React from 'react';
import Navabr from './components/navabr';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Work from './sections/Work';
import Online from './components/Online';
import MeetOur from './components/MeetOur';
import UpcomingEvent from './components/UpcomingEvent';
import Count from './sections/Count';
import OurLatestBlog from './components/OurLatestBlog';
import Courusel from './sections/Courusel';
import Forma from './sections/Forma';
import Footer from './components/Footer';





function App() {

    return (
        <div>
          
            <Navabr />
            <Hero />
            <Courses />
            <Work />
            <Online />
            <MeetOur />
            <UpcomingEvent />
            <Count />
            <OurLatestBlog />
            <Courusel />
            <Forma />
            <Footer />

        </div>
    );
}

export default App;