import './App.css';
import {FaHome} from 'react-icons/fa';
import {FaProjectDiagram} from 'react-icons/fa';
import {Link, Container} from "@mui/material"

//<Link href="projects.js" variant='h4' sx={{ p: 1, color: 'white'}}><FaProjectDiagram /></Link>

export default function Header() {

    return (
        <Container maxWidth={"lg"} sx={{ display: 'flex', justifyContent: 'center'}} >  
         
            <Link href="http://www.emsama.com/index.html" variant='h4'  sx={{ p: 1, color: 'white' }} ><FaHome /></Link>
                    
            
           
        </Container>
    );
}
