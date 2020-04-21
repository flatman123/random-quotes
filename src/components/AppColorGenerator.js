import React from 'react';
import '../styles/main.scss';


class AppColorGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colorClass: 'app-color-18',
        }
        this.colorGenerator = this.colorGenerator.bind(this);
    }

    colorGenerator(){
        const randIndex = Math.floor(Math.random(1) * 32)
        console.log(randIndex)
        this.setState({
            colorClass: `app-color-${randIndex}`
        })
    }

    render() {
        console.log(this.state.colorClass)
        return (
            <div id='div1' className={this.state.colorClass}>
                <h1>AppColorGenerator</h1>

                <button onClick={this.colorGenerator}> RENDER AGAIN </button>
                <h1>The App Rendered {this.state.tally} times</h1>
            </div>
        )
    }

}

export default AppColorGenerator;