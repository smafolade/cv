import {Component} from 'react';
import {List, ListItem, Typography, Grid, Link} from "@mui/material"

class Certs extends Component {
    render() { 
        return (
            <List >
                <ListItem>
                    <Grid container spacing={1}  sx={{ flexGrow: 1 }} >
                        <Grid item xs={2} >
                            <Typography sx={{p: 1}} ><img height={30} src={this.props.logo} /></Typography>
                        </Grid>
                        <Grid xs={5} > 
                            <Typography sx={{ fontWeight: 'bold', fontSize: '16px', p: 1 }}>{this.props.school}</Typography>
                        </Grid>
                        <Grid xs={4} > 
                            <Typography sx={{ fontSize: '16px', p: 1 }}>{this.props.education}</Typography>
                        </Grid>
                        <Grid xs={1} > 
                            <Typography sx={{ fontSize: 'default', p: 1 }}>{this.props.year}</Typography>
                        </Grid>

                        <Grid item xs={12} align={"center"}> 
                            <Link href={this.props.href}>
                                <img src={this.props.cert}/>
                            </Link>
                        </Grid>
                    </Grid>
                </ListItem>
            </List>
        );
    }
}

export default Certs;
