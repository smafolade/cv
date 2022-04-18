import React from 'react';
import '../App.css';
import Certs from './Certs';
import {FaCertificate} from 'react-icons/fa';
import {Container, Grid, Paper, Typography} from "@mui/material";
import CERT_IMG from '../img/certificate-elements-of-ai-se.jpg';
import CERT_PHP from '../img/cert_oo_php_mvc.jpg';
import UH_LOGO from '../img/unihel.jpg';
import UDEMY_LOGO from '../img/udemy.jpg';

class Courses extends React.Component {
    constructor(props) {
        super(
            
        );
        
    }
    render() {
        const certs = [{school:'University of Helsinki', education:'Elements of AI', year:'2022', href: 'https://www.elementsofai.se/', 
                        cert: CERT_IMG, logo: UH_LOGO},
                        {school:'Udemy', education:'Object Oriented PHP and MVC', year:'2022', href: 'https://www.udemy.com/certificate/UC-801237fd-319f-4ebe-8a5a-e9106c706a3c/', 
                        cert: CERT_PHP, logo: UDEMY_LOGO},
                    ]


        return (
            <Container maxWidth={"lg"}>
                <Grid container spacing={1}  sx={{ flexGrow: 1, justifyContent: 'center' }} >
                    <Grid item xs={12}> 
                        <Paper sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                m: 2,
                                p: 2,
                        }}>
                            <Grid container spacing={1} sx={{ flexGrow: 1 }} >
                                <Grid item xs={12} sx={{ textAlign: 'center' }}> 
                                    <Typography sx={{ fontSize: 'h4.fontSize' }}><FaCertificate /></Typography>
                                    <Typography sx={{ fontSize: 'h6.fontSize' }}>Certifikat</Typography>
                                </Grid>
                                    {certs.map( (item, index) => {
                                        return (<Certs key={index} school={item.school} education={item.education} 
                                                    href={item.href} year={item.year} cert={item.cert} logo={item.logo}/>);
                                    })}
                            </Grid>                          
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default Courses;