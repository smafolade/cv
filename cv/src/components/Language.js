import {Component} from 'react';
import '../App.css';
import {List, ListItem, Typography} from "@mui/material"

class Language extends Component {
    render() { 
        const myBlue = "lightblue";
    
        return (
            <List >
                <ListItem>
                    <Typography sx={{bgcolor: '#5e8fc2', p: 1, color: 'white', borderRadius:2}} >{this.props.lang}</Typography>
                    <Typography sx={{ p: 1 }}>{this.props.level}</Typography>
                </ListItem>
            </List>
        );
    }
}

export default Language;