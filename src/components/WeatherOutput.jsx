const React = require('react');

const WeatherOutput = ({location, temp}) => {
        return (
            <h2>The temperature in {location} is {temp}.</h2>
        );
    };

module.exports = WeatherOutput;