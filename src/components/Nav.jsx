const React = require('react');
const {NavLink} = require('react-router-dom');

const DoActiveStyling = ({isActive, isPending}) => {
    return {
        fontWeight: isActive?"bold":""
    }
}
const Nav = (props) => {
        return (
            <div>
            <h2>This is the Nav</h2>
            <NavLink to="/" style={DoActiveStyling}> Get Weather</NavLink>
            <NavLink to="about" style={DoActiveStyling}>About</NavLink>
            <NavLink to="examples" style={DoActiveStyling}> Examples</NavLink>
            </div>
        );
   };

module.exports = Nav;