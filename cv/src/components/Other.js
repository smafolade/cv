import {Component} from 'react';
import '../App.css';
import {List, ListItem, Typography} from "@mui/material"


class Other extends Component {
    render() { 
        return (
            <List >
                <ListItem>
                <Typography sx={{bgcolor: '#5e8fc2', p: 1, color: 'white', borderRadius: 2}} >{this.props.label}</Typography>
                </ListItem>
            </List>            
        );
    }
}

export default Other;