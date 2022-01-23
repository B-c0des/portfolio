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
  background: `linear-gradient(85deg , black -10%, #005266 10%, #80e5ff  90%, white 110%)`,
    boxShadow: `inset 2px 2px 10px -5px steelblue, 0 0 3px -5px white,inset 2px -2px 2px -1px white, -2px 2px 4px steelblue, 2px -2px 20px steelblue;`,
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
     glowingCard:{
       filter: "drop-shadow(0px 0px 50px steelblue)",
       justifyContent: "center"
     },
     avatar: {
      width: "50%",
      border: "2px solid white",
      filter: "drop-shadow(0px 0px 20px white)",
      borderRadius: "100%",
     },
     messageForm: {
      width: "100%",
     },
     textName: {
       display: "flex",
       justifyContent: "center",
       color: "white",
       filter: "drop-shadow(0px 0px 25px white)",
    },
         subHeader:{
    border: 0,
    color: "white",
    padding: '1px',
    margin:'3px',
    textShadow: '0 2px 5px white',
    textAlign: 'center',
    userSelect: "none",
    borderRadius: '10px',
     },
   }));
  
  const classes = useStyles();
    return ( 
       <Card className="section pb-0 section-profile-cover" 
        style={{backgroundColor: "black" }}
        >
       <Container className={classes.glowingCard}>
       <div className="p-2" style={{filter: "drop-shadow(0px 0px 10px black)"}}>
       <Row className="justify-content-center">
        <Col className={classes.card} lg="4">
         <img className={classes.avatar}   src={prof.avatar_url}  alt="" />
          <h3 className="" style={{filter: 'drop-shadow(0px 0px 5px black )' , textAlign: 'center'}}>
           <span className={classes.subHeader}>{prof.name}</span>
           <br/>
           <h3 className={classes.subHeader}>{prof.bio}</h3>
           <br/>
           {/* <h3 className="text-white">{prof.location}</h3>
          <br/> */}
           <h5 className={classes.subHeader} >{'Github Profile Last Updated:'}</h5>
           <h5 className={classes.subHeader}>{prof.updated_at}</h5>
          </h3>
          <Resume />
          </Col>
           <Col lg="8" className={classes.messageForm} >
           <h2 id="contact" className={classes.textName}>
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