import {React} from 'react'

import Navbar from './components/layout/Navbar/Navbar';
import Hero from './components/sections/Hero/Hero';
import About from './components/sections/About/About';
import Projects from './components/sections/Projects/Projects';
import Research from './components/sections/Research/Research';
import Contact from './components/sections/Contact/Contact';
import Footer from './components/layout/Footer/Footer';

function App() {
    return (
        <div className="app">
            <Navbar/>
            <main>
                <Hero/>
                <About/>
                <Projects/>
                <Research/>
                <Contact/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;