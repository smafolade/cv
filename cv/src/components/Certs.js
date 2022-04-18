import {Component} from 'react';
import '../App.css';
import {List, ListItem, Typography, Grid, Link, Card, CardMedia, CardContent} from "@mui/material"

class Certs extends Component {
    render() { 
        return (
                <Grid item xs={12} md={6}>
                    <Grid container spacing={2} >
                        <Grid item xs={2} justifyContent="right">
                            <Typography sx={{p: 1}} ><img height={30} src={this.props.logo} /></Typography>
                        </Grid>
                        <Grid item xs={3} > 
                            <Typography sx={{ fontWeight: 'bold', fontSize: '16px', p: 1 }}>{this.props.school}</Typography>
                        </Grid>
                        <Grid item xs={4} > 
                            <Typography sx={{ fontSize: '16px', p: 1 }}>{this.props.education}</Typography>
                        </Grid>
                        <Grid item xs={1} > 
                            <Typography sx={{ fontSize: 'default', p: 1 }}>{this.props.year}</Typography>
                        </Grid>

                        <Grid item xs={12} align={"center"} > 
                            <Link href={this.props.href} >
                                <img className="imgBorder" src={this.props.cert} />
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
        );
    }
}

export default Certs;
