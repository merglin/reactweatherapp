const React = require('react');
React.createClass = require('create-react-class');
const {NavLink} = require('react-router-dom');

const DoActiveStyling = ({isActive, isPending}) => {
    return {
        fontWeight: isActive?"bold":""
    }
}

const Nav = React.createClass({
    onSearch: function(e) {
        e.preventDefault();
    },
    render: function(props) {
    return (
        <div className='top-bar'>
            <div className='top-bar-left'>
                <ul className="menu">
                    <li className="menu-text">React Weather App</li>
                    <li>
                    <NavLink to="/" style={DoActiveStyling}> Get Weather</NavLink>
                    </li>
                    <li>
                    <NavLink to="about" style={DoActiveStyling}>About</NavLink>
                    </li>
                    <li>
                    <NavLink to="examples" style={DoActiveStyling}> Examples</NavLink>
                    </li>
                </ul>
            </div>
            <div className="top-bar-right">
                <form onSubmit={this.onSearch}>
                    <ul className="menu">
                        <li>
                            <input type="search" name="" id="" placeholder="Search weather"/>
                        </li>
                        <li>
                            <input type="submit" className="button" value="Get Weather" />
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    );
    }
});

module.exports = Nav;