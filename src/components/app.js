import React from 'react';
import ReactDOM from 'react-dom';
//import '../styles/styles.scss';
import AppColorGenerator from './AppColorGenerator'


class App extends React.Component{
    render(){
        return (
            <div>
                <h1>MY RANDOM QUOTE APP</h1>
                <AppColorGenerator />
            </div>
        )
    }
};

export default App;