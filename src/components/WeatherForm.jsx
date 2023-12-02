const React = require('react');
React.createClass = require('create-react-class');

const WeatherForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();
        const location = this.refs.location.value;
        if (location.length> 0) {
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    },
    render: function() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div><input type="text" ref="location" placeholder="Enter City Name"></input></div>
                <div><button>Get Weather</button></div>
            </form>
        );
    }
});

module.exports = WeatherForm;