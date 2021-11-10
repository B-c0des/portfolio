import React from 'react';

import {
    Card,
    Col,
    Row,
    Container,
} from "reactstrap";
import Tilt from 'react-parallax-tilt';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Resume from "../components/Resume";



     
const GithubProfileCard = ({ prof }) => {
  
  
   const useStyles = makeStyles((theme) => ({
  card: {
    background: 'linear-gradient(80deg,black -00%, steelblue 40%, #80e5ff 80%, white 100%)',
     boxShadow: `inset 2px 00px 150px -100px white,inset 2px 2px 10px -5px palegoldenrod, 0 0 3px -5px white`,
       borderTop: '1px solid white;',      
      borderRight: '1px solid white',
    '&:hover': {
      
      cursor: 'pointer'},
    border: 0,
    fontSize: 16,
        color: 'white',
        padding: '10px',
    textShadow: '0 2px 2px black',
    textAlign: 'center',
        userSelect: "none",
       borderRadius: '10px',
        height: '60%',
     },
     avatar: {
       width: "100px",
       filter: "drop-shadow(0px 1px 15px #005266)",
       border: "2px solid white",
     }
 
    }));
    

  const classes = useStyles();
  

    return ( 
            <Card className="section pb-0 section-profile-cover" 
            style={{backgroundColor: "#212122" }} 
            
      >
  
                <Container className="" style={{filter: "drop-shadow(0px 0px 50px steelblue )"}}>
                <div className="p-2" style={{filter: "drop-shadow(0px 0px 10px black)"}}>
                  <Row className="justify-content-center">
              <Col className={classes.card} lg="4">
                 
                      <img src={prof.avatar_url} className={classes.avatar} alt="" className="text-center rounded-circle  img-fluid shadow shadow-lg--hover mb-1"/>
                    
                      <h3 className="justify-content-center align-items-center text-white text-center" style={{filter: 'drop-shadow(0px 0px 5px black )' , textAlign: 'center'}}>
                          
                          <span className="text-white text-center">{prof.name}</span>
                          <br/>
                          <h3 className="text-white">{prof.bio}</h3>
                          <br/>
                          {/* <h3 className="text-white">{prof.location}</h3>
                          <br/> */}
                          <h5 className="text-white" >{'Github Profile Last Updated:'}</h5>
                          <h5 className="text-white">{prof.updated_at}</h5>
                      </h3>
                      <Resume />
                      </Col>
                    <Col lg="8" className="order-lg-0">
                      <h2 id="contact" className="text-white" style={{filter: "drop-shadow(0px 3px 5px black )", textAlign: 'center' }}>
                       Reach Out to me
                      </h2>
                      <div data-netlify-recaptcha="true" data-netlify="true" class="mighty-form" id="mf-e9b1f4b8-0f47-41c1-a114-0c1eac9921d5" ></div> 
                    </Col>                    
                  </Row>
                </div>
          </Container>
              </Card>
     );
}
 
export default GithubProfileCard;