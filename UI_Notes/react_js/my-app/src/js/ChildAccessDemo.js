import React from 'react';

var count = 1;

class ChildAccessDemo extends React.Component 
{
    render() 
    {
        React.Children.map(this.props.children, () => 
        {
                console.log(this.props.children, count++);
        });
        return ( <ul> {this.props.children} </ul>)
    }
};

export default ChildAccessDemo;
