import React from 'react';
import { socialLinks } from "../portfolio";
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import {Link} from 'react-scroll'
import Tilt from 'react-parallax-tilt';
function openNew(link) {
    window.open(`${link}`, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=1000,height=1000");
}
const useStyles = makeStyles((theme) => ({
  twitter: {
  background: 'linear-gradient(80deg, steelblue 10%, #80e5ff 80%, white 110%)',
     boxShadow: 'inset 1px -0px 5px 0px white, 0 0 5px -1px white, -2px 2px 4px steelblue, 1px -1px 4px white;',
  
    '&:hover': {
      background: 'linear-gradient(145deg,  #2196F3 10%, #b3f0ff 90%)',
      color: 'white',
      textShadow: '0 2px 10px white',
      boxShadow: 'inset 1px -0px 4px 0px white, 0 0 5px -1px white, -1px 1px 4px white, 2px -2px 4px steelblue;',
      marginTop: '',
      filter: 'drop-shadow(0px 0px 5px white)'},
    border: 0,
    fontSize: 16,
    borderRadius: 5,
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin:'3px',
    textShadow: '0 2px 2px black'
  },
  linkedin: {
  background: 'linear-gradient(80deg, steelblue 10%, #80e5ff 80%, white 110%)',
     boxShadow: 'inset 1px -0px 5px 0px white, 0 0 5px -1px white, -2px 2px 4px steelblue, 2px -2px 4px white;',
  
    '&:hover': {
      background: 'linear-gradient(145deg,  #2196F3 10%, #b3f0ff 90%)',
      color: 'white',
      textShadow: '0 2px 10px white',
      boxShadow: 'inset 1px -0px 4px 0px white, 0 0 5px -1px white, -2px 2px 4px white, 2px -2px 4px steelblue;',
      marginTop: '',
      filter: 'drop-shadow(0px 0px 5px white)'},
    border: 0,
    fontSize: 16,
    borderRadius: 5,
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin:'3px',
    textShadow: '0 2px 2px black'
  },
  github: {
    background: 'linear-gradient(85deg, #1a1a1a 10%, #005266 80%, white 120%)',
  boxShadow: 'inset 1px -0px 5px 0px white, 0 0 5px -1px white, -2px 2px 4px steelblue, 2px -2px 4px white;',
  
     '&:hover': {
      background: 'linear-gradient(145deg,  #1a1a1a 10%, #008fb3 90%)',
      color: '#fff',
       boxShadow: 'inset 1px -0px 4px 0px white, 0 0 5px -1px white, -2px 2px 4px white, 2px -2px 4px steelblue;',
      marginTop: '',
          textShadow: '0 2px 10px cyan',
    filter: 'drop-shadow(0px 0px 5px white)',
    padding:'5px 30px'},
    border: 0,
    fontSize: 16,
    borderRadius: 3,
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin:'2px',
    textShadow: '0 2px 2px black'
  },
  resume: {
  background: 'linear-gradient(80deg, steelblue 10%, #80e5ff 80%, white 110%)',
     boxShadow: 'inset 1px -0px 5px 0px white, 0 0 5px -1px white, -2px 2px 4px steelblue, 2px -2px 4px white;',

    '&:hover': {
      background: 'linear-gradient(145deg,  #2196F3 10%, #b3f0ff 90%)',
      color: 'white',
      textShadow: '0 2px 10px white',
      boxShadow: 'inset 1px -0px 4px 0px white, 0 0 5px -1px white, -2px 2px 4px white, 2px -2px 4px steelblue;',
      marginTop: '',
      filter: 'drop-shadow(0px 0px 5px white)'},
    border: 0,
    fontSize: 16,
    borderRadius: 5,
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin:'3px',
    textShadow: '0 2px 2px black'
  },
  contact: {
  background: 'linear-gradient(80deg, steelblue 10%, #80e5ff 80%, white 110%)',
     boxShadow: 'inset 1px -0px 5px 0px white, 0 0 5px -1px white, -2px 2px 4px steelblue, 2px -2px 4px white;',

    '&:hover': {
      background: 'linear-gradient(145deg,  #2196F3 10%, #b3f0ff 90%)',
      color: 'white',
      textShadow: '0 2px 10px white',
      boxShadow: 'inset 1px -0px 4px 0px white, 0 0 5px -1px white, -2px 2px 4px white, 2px -2px 4px steelblue;',
      marginTop: '',
      filter: 'drop-shadow(0px 0px 5px white)'},
    border: 0,
    fontSize: 16,
    borderRadius: 5,
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin:'3px',
    marginTop: '-6px',
    textShadow: '0 2px 2px black',
    justifyContent: 'center',
  },
  location: {
    background: 'linear-gradient(80deg, #2196F3 30%, #80e5ff 90%)',
     boxShadow: 'inset 0px -2px 3px 0px white, 0 0 5px -1px white, -2px 2px 4px deeppink, 2px -2px 4px cyan;',
  
    '&:hover': {
      background: 'linear-gradient(145deg,  #2196F3 10%, #b3f0ff 90%)',
      color: 'cyan',
      textShadow: '0 2px 10px cyan',
      boxShadow: 'inset 0px -2px 3px 0px white, 0 0 5px -1px white, -2px 2px 4px cyan, 2px -2px 4px deeppink;',
      marginTop: '',
      filter: 'drop-shadow(0px 0px 5px white)'},
    border: 0,
    fontSize: 16,
    borderRadius: 5,
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin:'3px',
    textShadow: '0 2px 2px black'
  },
  buttonCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    filter: 'drop-shadow(0px 10px 10px steelblue)',
  }
}));


const SocialLinks = () => {
  const classes = useStyles();
  const handleClick = (e, path) => {
   e.preventDefault()
  window.open(`${path}`, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=1000,height=1000");
  };


    return ( 
      
      <div className={classes.buttonCenter}>
        <Button type="button" onClick={(e) => handleClick(e, socialLinks.twitter)} className={classes.twitter}>
      <i style={{filter: 'drop-shadow(0px 0px 5px white)'}} className="fa fa-twitter" />
      </Button>
        <Button type="button" onClick={(e) => handleClick(e, socialLinks.linkedin)} className={classes.linkedin}>
        <i style={{filter: 'drop-shadow(0px 0px 5px white)'}} className="fa fa-linkedin" />
        </Button>
        <Button type="button" onClick={(e) => handleClick(e, socialLinks.github)} className={classes.github}>
        <i style={{filter: 'drop-shadow(0px 0px 5px white)'}} className="fa fa-github" />
        </Button>
        
        <Button type="button"  onClick={(e) => handleClick(e, socialLinks.resume)} className={classes.resume}>
         <i style={{filter: 'drop-shadow(0px 0px 5px white)'}}>Resume</i>
        </Button>
        <Link  to="contact" spy={true} smooth={true}>
        <Button type="button" className={classes.contact}>
        <span className="btn-inner--icon mr-1">
        <i className="fa fa-file" />
      </span>
      <Link  to="contact" spy={true} smooth={true}>
      <i style={{filter: 'drop-shadow(0px 0px 5px white)'}}>
      Contact Me &#128071;
      </i>
      </Link>
      </Button>
      </Link>
      </div>
     );
}
 


export default SocialLinks;
