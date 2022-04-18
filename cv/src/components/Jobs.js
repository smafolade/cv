import {Component} from 'react';
import '../App.css';
import {List, ListItem, Typography, Grid} from "@mui/material"

class Jobs extends Component {
    render() { 
        return (
            <List >
                <ListItem>
                    <Grid container >
                        <Grid item xs={2} >
                            <Typography sx={{p: 1}} ><img height={30} src={this.props.logo} /></Typography>
                        </Grid>
                        <Grid item xs={10} >
                            <Typography sx={{fontWeight: 'bold', p: 1}} >{this.props.job}</Typography>
                        </Grid>
                        <Grid item xs={6} alignItems={'left'}>
                            <Typography sx={{ p: 1}} >{this.props.roll}</Typography>
                        </Grid>
                        <Grid item xs={6} align={"right"}>
                            <Typography sx={{ p: 1}} >{this.props.year}</Typography>
                        </Grid>
                    </Grid>
                </ListItem>
            </List>
        );
    }
}

export default Jobs;