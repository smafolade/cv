import React from 'react';
import '../App.css';
import Coding from './Coding';
import Language from './Language';
import Other from './Other';
import {FaLaptopCode} from 'react-icons/fa';
import {FaLanguage} from 'react-icons/fa';
import {FaCogs} from 'react-icons/fa';
import {Container, Grid, Paper, Typography} from "@mui/material"

class Knowledge extends React.Component {
    constructor(props) {
        super(
            
        );
        
    }
    render() {
        const coding = ['HTML','CSS','React','JS','Visual Kosmos','C/C++','Delphi','SQL','MySql','HTML5','XML','CSS3','Pascal','Python']
        const lang = [{lang:'Svenska', level:'Flytande'},{lang:'Ungerska', level:'Flytande, modersmål'},{lang:'Engelska', level:'Goda kunskaper'}]
        const other = ['Medlem i Mensa','Internationell Judo domare','Körkort B']
 
        return (
            <Container maxWidth={"lg"}>
                <Grid container spacing={1}  sx={{ flexGrow: 1, justifyContent: 'center' }} >
                    <Grid item lg={4} md={6} xs={12} > 
                        <Paper sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            m: 2,
                            p: 2,
                        }}>
                            <Grid container spacing={1} sx={{ flexGrow: 1 }} >
                                <Grid item xs={12} sx={{ textAlign: 'center' }}> 
                                    <Typography sx={{ fontSize: 'h4.fontSize' }}><FaLaptopCode /></Typography>
                                    <Typography sx={{ fontSize: 'h6.fontSize' }}>Kodning</Typography>
                                </Grid>
                                
                                <Grid item > 
                                    <Paper elevation={0}  sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                    }}>
                                        {coding.map( (item, index) => {
                                            return (<Coding key={item} label={item}/>);
                                        })}
                                    </Paper>
                                </Grid>

                            </Grid>
                        </Paper>
                    </Grid>
                    
                    <Grid item lg={4} md={6} xs={12}> 
                        <Paper sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                m: 2,
                                p: 2,
                        }}>
                            <Grid container spacing={1} sx={{ flexGrow: 1 }} >
                                <Grid item xs={12} sx={{ textAlign: 'center' }}> 
                                    <Typography sx={{ fontSize: 'h4.fontSize' }}><FaLanguage /></Typography>
                                    <Typography sx={{ fontSize: 'h6.fontSize' }}>Språk</Typography>
                                </Grid>
                                
                                <Grid item > 
                                    <Paper elevation={0}  sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        
                                    }}>
                                        {lang.map( (item, index) => {
                                            return (<Language key={index} lang={item.lang} level={item.level}/>);
                                        })}
                                    </Paper>
                                </Grid>
                            </Grid>                          
                        </Paper>
                    </Grid>

                    <Grid item lg={4} md={6} xs={12} >  
                        <Paper sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                m: 2,
                                p: 2,
                        }}>
                            <Grid container spacing={1} sx={{ flexGrow: 1 }} >
                                <Grid item xs={12} sx={{ textAlign: 'center' }}> 
                                    <Typography sx={{ fontSize: 'h4.fontSize' }}><FaCogs /></Typography>
                                    <Typography sx={{ fontSize: 'h6.fontSize' }}>Övrigt</Typography>
                                </Grid>
                                
                                <Grid item > 
                                    <Paper elevation={0}  sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',                                      
                                    }}>
                                        {other.map( (item) => {
                                            return (<Other key={item} label={item}/>);
                                        })}
                                    </Paper>
                                </Grid>
                            </Grid>
                            
                        </Paper>
                    </Grid>
                </Grid>
            </Container>


        );
    }
}

export default Knowledge;