const React = require('react');
const {Route, Routes} = require('react-router-dom');
const Nav = require('Components/Nav');
const Weather = require('Components/Weather');
const About = require('Components/About');
const Examples = require('Components/Examples');

const Main = (props) =>  {
        return (
            <div>
            <Nav/>
            <h1>This is the main component</h1>
            <Routes>
                <Route exact path="about" element={<About/>}/>
                <Route exact path="examples" element={<Examples/>}/>
                <Route exact path="/" element={<Weather/>}/>
            </Routes>
            </div>
        );
    }

module.exports = Main;