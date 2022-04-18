import {Component} from 'react';
import '../App.css';
import {Typography} from "@mui/material"

class Coding extends Component {
    render() { 
        return (
            <Typography sx={{bgcolor: '#5e8fc2', m: 1, p: 1, color: 'white', borderRadius: 2}} >{this.props.label}</Typography>
        );
    }
}

export default Coding;