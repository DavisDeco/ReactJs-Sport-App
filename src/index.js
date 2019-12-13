import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

//import the routes component
import Routes from './routes'

// function to return routes
const App = () => {
    return(
        <BrowserRouter>
            <Routes/>        
        </BrowserRouter>
    )

}

ReactDOM.render(<App />, document.getElementById('root'));

