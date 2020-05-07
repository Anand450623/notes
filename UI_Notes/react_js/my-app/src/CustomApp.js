import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './index.css';

class  CustomApp extends React.Component
{
    render()
    {
        return (<React.Fragment>
        <h1 className="highlight">Heading</h1>
        <button className="btn btn-success">Submit</button>
        <Button variant="warning"> Click here </Button>
        <Typography variant="h4" gutterBottom>Welcome to React</Typography>
        <Button variant="contained" color="primary">Submit2</Button>
        </React.Fragment>);
    }
}

export default CustomApp;