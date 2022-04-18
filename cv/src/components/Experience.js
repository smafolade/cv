import React from 'react';
//import '../App.css';
import Jobs from './Jobs';
import Certs from './Certs';
import {FaUserCog} from 'react-icons/fa';
import {FaCertificate} from 'react-icons/fa';
import {Container, Grid, Paper, Typography} from "@mui/material";
import CERT_IMG from '../img/certificate-elements-of-ai-se.jpg';
import CERT_PHP from '../img/cert_oo_php_mvc.jpg';
import UH_LOGO from '../img/unihel.jpg';
import UNIKUM_LOGO from '../img/unikum.jpg';
import BARKFORS_LOGO from '../img/barkfors.jpg';
import DRIVEC_LOGO from '../img/drivec.jpg';
import UDEMY_LOGO from '../img/udemy.jpg';
import Schools from './Schools';
import {FaUserGraduate} from 'react-icons/fa';
import LIN_UNI from '../img/linuni.jpg';
import LUND_UNI from '../img/lunduni.jpg';
import DOBO from '../img/dobo.png';
import KOMVUX from '../img/komvux.png';


class Experience extends React.Component {
    constructor(props) {
        super(
            
        );
        
    }
    render() {
        const jobs = [{roll: 'Systemutveckalre', job:'Vitec Unikum Datasystem AB', year:'2008 - nu', logo:UNIKUM_LOGO},
                        {roll: 'Systemutveckalre', job:'Drivec AB', year:'2007 - 2008', logo:DRIVEC_LOGO},
                        {roll: 'Systemutveckalre', job:'Barkfors', year:'2003 - 2007', logo:BARKFORS_LOGO},
                        {roll: 'Systemutveckalre', job:'Sync BPI AB', year:'2000 - 2002', logo:''},
                        {roll: 'Systemutveckalre', job:'EG Tancom AB', year:'1998 - 2000', logo:''},
                    ]

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
                                    <Typography sx={{ fontSize: 'h4.fontSize' }}><FaUserCog /></Typography>
                                    <Typography sx={{ fontSize: 'h6.fontSize' }}>Erfarenhet</Typography>
                                </Grid>
                                
                                <Grid item xs={12} > 
                                    <Paper elevation={0} >
                                         {jobs.map( (item, index) => {
                                            return (<Jobs key={index} job={item.job} year={item.year} roll={item.roll} logo={item.logo}/>);
                                        })}
                                    </Paper>
                                </Grid>

                            </Grid>
                        </Paper>
                    </Grid>
                    
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

export default Experience;