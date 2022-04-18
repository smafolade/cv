import './App.css';
import {Container, Link, Grid, Typography} from "@mui/material"
import { FaAlignJustify } from 'react-icons/fa';

export default function Footer() {

    return ( 
        <Container maxWidth={"lg"} sx={{ display: 'flex'}} >       
            <Grid item xs={12} justifyContent={'left'}>
                <Typography sx={{ color: 'white' }}>Developed by Sandor Magyar in React with MUI</Typography>
            </Grid>
            <Grid item xs={12} justifyContent={'center'}>
                <Link href="https://www.vecteezy.com/free-photos" sx={{ p: 1, color: 'white'}} >Free Stock photos by Vecteezy</Link>   
            </Grid>                   
        </Container>
    );
}
