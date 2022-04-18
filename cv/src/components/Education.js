import React from 'react';
//import '../App.css';
import Schools from './Schools';
import {FaUserGraduate} from 'react-icons/fa';
import {Container, Grid, Paper, Typography} from "@mui/material";
import LIN_UNI from '../img/linuni.jpg';
import LUND_UNI from '../img/lunduni.jpg';
import DOBO from '../img/dobo.png';
import KOMVUX from '../img/komvux.png';

class Education extends React.Component {
    constructor(props) {
        super(
            
        );
        
    }
    render() {
        const schools = [{school:'Linköpings Universitet', education:'Grunderna i AI', points:'2 HP', year:'2022', logo:LIN_UNI},
                            {school:'Lunds Universitet', education:'Datalogi', points:'52,5 HP', year:'1996-1998', logo:LUND_UNI},
                            {school:'', education:'Matematik', points:'30 HP', year:'', logo:''},
                            {school:'Komvux Kronborg Malmö', education:'', points:'', year:'1995-1996', logo:KOMVUX},
                            {school:'Dobó István Gimnázium, Eger, Ungern', education:'', points:'', year:'1983-1987', logo:DOBO},
                        ]


        return (
            <Container maxWidth={"lg"}>
                <Grid container spacing={1}  sx={{ flexGrow: 1, justifyContent: 'center' }} >
                    <Grid item md={6} xs={12} > 
                        <Paper sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            m: 2,
                            p: 2,
                        }}>
                            <Grid container spacing={1} sx={{ flexGrow: 1 }} >
                                <Grid item xs={12} sx={{ textAlign: 'center' }}> 
                                    <Typography sx={{ fontSize: 'h4.fontSize' }}><FaUserGraduate /></Typography>
                                    <Typography sx={{ fontSize: 'h6.fontSize' }}>Utbildning</Typography>
                                </Grid>
                                
                                <Grid item > 
                                    <Paper elevation={0} >
                                         {schools.map( (item, index) => {
                                            return (<Schools key={index} school={item.school} education={item.education} 
                                                        points={item.points} year={item.year} logo={item.logo}/>);
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

export default Education;