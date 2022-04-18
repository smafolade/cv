import React from 'react';
import './App.css';
import Knowledge from './components/Knowledge';
import Courses from './components/Courses';
import Experience from './components/Experience';
import Me from './components/Me';
import {Container, Typography} from "@mui/material"

export default function Cv() {
    return (
        <Container  maxWidth={"lg"} >		
            <Me/>

            <Typography sx={{ fontSize: 'h4.fontSize', textAlign: 'center', color: 'white', m: 3 }}>Kunskaper</Typography>
            
            <Knowledge />

            <Typography sx={{ fontSize: 'h4.fontSize', textAlign: 'center', color: 'white', m: 3 }}>Erfarenhet och Utbildning</Typography>

            <Experience />

            <Typography sx={{ fontSize: 'h4.fontSize', textAlign: 'center', color: 'white', m: 3 }}>Certifikat</Typography>

            <Courses />
        </Container>
    );
}
