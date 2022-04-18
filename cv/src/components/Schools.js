import {Component} from 'react';
import '../App.css';
import {List, ListItem, Typography, Grid} from "@mui/material"

class Schools extends Component {
    render() { 
        if (this.props.school === '') {
            return (
                <List >
                    <ListItem>
                        <Grid container spacing={1} >
                            <Grid item xs={9} >
                                <Typography sx={{ p: 1}} >{this.props.education}</Typography>
                            </Grid>
                            <Grid item xs={3} >
                                <Typography sx={{ p: 1}} >{this.props.points}</Typography>
                            </Grid>
                            
                        </Grid>
                    </ListItem>
                </List>
            );

        } else {
            return (
                <List >
                    <ListItem>
                        <Grid container spacing={1} >
                            <Grid item xs={1} >
                                <Typography sx={{p: 1}} ><img height={30} src={this.props.logo} /></Typography>
                            </Grid>
                            <Grid item xs={8} >
                                <Typography sx={{fontWeight: 'bold', p: 1}} >{this.props.school}</Typography>
                            </Grid>
                            <Grid item xs={3} >
                                <Typography sx={{ p: 1}} >{this.props.year}</Typography>
                            </Grid>
                            <Grid item xs={9} >
                                <Typography sx={{ p: 1}} >{this.props.education}</Typography>
                            </Grid>
                            <Grid item xs={3} >
                                <Typography sx={{ p: 1}} >{this.props.points}</Typography>
                            </Grid>
                            
                        </Grid>
                    </ListItem>
                </List>
            );
        }
    }
}

export default Schools;
