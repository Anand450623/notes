import React from 'react';

class Timer1 extends React.Component 
{
    constructor() 
    {
        super();
        this.state = {
            secondsElapsed: 0
        };
    }
    start = () => {
        this.setState({
            secondsElapsed: this.state.secondsElapsed + 1
        });
    }
    handleClick = (e) => {
        setInterval(this.start, 1000);
    }
    render() {
        return ( <React.Fragment><br/>
                    <button onClick = {this.handleClick}>
                        Start Timer 
                    </button><br/><br/>
                    <h1>{this.state.secondsElapsed}</h1>
                    <Resultant new = {this.state.secondsElapsed}/> 
                </React.Fragment>);
            }
}

class Resultant extends React.Component 
{
    render() 
    {
        return( <div> <h3> Seconds Elapsed: {this.props.new} </h3> </div>);
    }
}

export default Timer1;
