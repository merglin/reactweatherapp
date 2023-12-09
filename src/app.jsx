const React = require('react');
const ReactDOM = require('react-dom');
const {createRoot} = require('react-dom/client');
const {Route, HashRouter, Routes, IndexRoute, hashHistory} = require('react-router-dom');
const Main = require('Components/Main');
const Weather = require('Components/Weather');

require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

const root = createRoot(document.getElementById('app'));

root.render(
    <HashRouter>
        <Routes>
            <Route path="*" element={<Main/>}/>
        </Routes>
    </HashRouter>
    );
