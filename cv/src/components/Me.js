import {FaLinkedin} from 'react-icons/fa';
import {FaFilePdf} from 'react-icons/fa';
import '../App.css';
import SM150_150 from '../img/SM150_150.jpg';
import {Container, Grid, Paper, Typography, Box, Link, Button} from "@mui/material"

export default function Me() { 

    return (
        <Container maxWidth={"lg"}>
            <Grid container spacing={1}  sx={{ flexGrow: 1, justifyContent: 'center' }} >
                <Grid item lg={4} md={6} xs={12} >          
                    <Paper sx={{ 
                        m: 2, 
                        p: 2,  
                        mx: "auto",
                        width: "150px",
                        height: "150px",                        
                        overflow: "hidden",
                        position: "relative",                           
                        borderRadius: "200px",
                    }}>
                        <img src={SM150_150}/>
                    </Paper>
                </Grid>
            
                <Grid item lg={4} md={6} xs={12}>
                    <Paper sx={{ m: 2, p: 2}}>
                        <Typography variant="h4" >Sandor Magyar</Typography>

                        <Grid container spacing={1}  sx={{ flexGrow: 1 }} >
                            <Grid item xs={2} > 
                                <Link href="http://www.linkedin.com/in/sandor-magyar-42b75b70" >
                                <Typography sx={{ fontSize: 'h4.fontSize' }}><FaLinkedin /></Typography>
                                </Link>
                            </Grid>

                            <Grid item xs={2} > 
                                <Link href="../img/SM_CV.pdf" download={"SM_CV.pdf"} >
                                    <Typography sx={{ fontSize: 'h4.fontSize', color: 'red' }}><FaFilePdf /></Typography>
                                </Link>                              
                            </Grid>

                            <Grid xs={8} > 
                                <Typography sx={{ fontSize: 'h6.fontSize', mt: 3 }}>Full stack Developer</Typography>
                            </Grid>
                        </Grid>

                        <Typography variant="subtitle1">Lund, Sverige</Typography>
                    </Paper>
                </Grid>

                <Grid item lg={4} md={6} xs={12}>
                    <Paper sx={{ m: 2, p: 2}}>
                        <p>
                            Jag är en senior systemutvecklare, med mer än <b>20 års erfarenhet</b>.
                        <br/>
                            Jag är grundlig och pålitlig och jag utför mitt arbete nogrannt och snabbt. Målmedveten person som ständigt utvecklas och söker nya kunskaper.
                        </p>  
                    </Paper>  
                </Grid>
            </Grid>
        </Container>        
    );
}
