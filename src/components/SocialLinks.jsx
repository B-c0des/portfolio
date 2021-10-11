import React from 'react';
import { socialLinks } from "../portfolio";
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import {Link} from 'react-scroll'
import Tilt from 'react-parallax-tilt';

const useStyles = makeStyles((theme) => ({
  twitter: {
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
  linkedin: {
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
  github: {
    background: 'linear-gradient(85deg, #1a1a1a 30%, #005266 90%)',
  boxShadow: 'inset 0px -2px 3px 0px white, 0 0 5px -1px white, -2px 2px 4px deeppink, 2px -2px 4px cyan;',
  
     '&:hover': {
      background: 'linear-gradient(145deg,  #1a1a1a 10%, #008fb3 90%)',
      color: '#fff',
       boxShadow: 'inset 0px -2px 3px 0px white, 0 0 5px -1px white, -2px 2px 4px cyan, 2px -2px 4px deeppink;',
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
  contact: {
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
}));


const SocialLinks = () => {
  const classes = useStyles();
    return ( 
      
      <div className="btn-wrapper size-lg text-lg" style={{width: "440px"}}>
      <Button type="button" href={socialLinks.twitter} className={classes.twitter}>
      <i className="fa fa-twitter" />
      </Button>
        <Button type="button" href={socialLinks.linkedin} className={classes.linkedin}>
        <i className="fa fa-linkedin" />
        </Button>
        <Button type="button" href={socialLinks.github} className={classes.github}>
        <i className="fa fa-github" />
        </Button>
        
        <Button type="button" href={socialLinks.resume} className={classes.resume}>
        Resume
        </Button>
        <Link  to="contact" spy={true} smooth={true}>
        <Button type="button" style={{width: "367px"}} className={classes.contact}>
        <span className="btn-inner--icon mr-1">
        <i className="fa fa-file" />
      </span>
      <Link  to="contact" spy={true} smooth={true}>Contact Me &#128071;
      </Link>
      </Button>
      </Link>
      </div>
     );
}
 


export default SocialLinks;
