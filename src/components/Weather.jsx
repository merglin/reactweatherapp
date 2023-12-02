const React = require('react');
React.createClass = require('create-react-class');
const WeatherForm = require('Components/WeatherForm');
const WeatherOutput = require('Components/WeatherOutput');
const OpenWeatherMap = require('../api/openWeatherMap');

const Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false
        };
    },

    handleSearch : function(location) {
        const that = this;
        this.setState({isLoading: true});
        let pWeather = OpenWeatherMap.getTemp(location);
        pWeather = pWeather
            .then(function(temp) {
                that.setState({
                location: location,
                temp: temp
            });
        pWeather
            .catch(
                function(error) {
                    alert(error);
            })
            .finally(function() {
                    that.setState({isLoading : false});
            }) ;
    
        });
    },
    render: function() {
        const {isLoading, temp, location} = this.state;
        
        function renderMessage() {
            if (isLoading) {
                return <h3>Fetching weather...</h3>;
            }
            else if (temp && location) {
                return <WeatherOutput temp={temp} location={location}/>
            }
        }
        return (
            <div>
                <h2>Get Weather</h2>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;