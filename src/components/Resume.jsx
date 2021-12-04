import React from 'react';

//import {  Button } from "reactstrap";
import { ExternalLink } from 'react-external-link';
import { socialLinks } from "../portfolio";
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import {Link} from 'react-scroll'
// import ThemeNesting from './Button';
const useStyles = makeStyles((theme) => ({
  twitter: {
    background: 'linear-gradient(80deg, steelblue 10%, #80e5ff 80%, white 110%)',
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
    textShadow: '0 2px 2px black',
    border: "1px solid white",
  },
  linkedin: {
    background: 'linear-gradient(80deg, steelblue 10%, #80e5ff 80%, white 110%)',
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
    textShadow: '0 2px 2px black',
    border: "1px solid white",
  },
  github: {
    background: 'linear-gradient(85deg, #1a1a1a 10%, #005266 90%, white 110%)',
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
    borderRadius: 5,
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin:'2px',
    textShadow: '0 2px 2px black',
    border: "1px solid white",
  },
  resume: {
    background: 'linear-gradient(80deg, steelblue 10%, #80e5ff 80%, white 110%)',
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
    textShadow: '0 2px 2px black',
    border: "1px solid white",
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

const Resume = () => {
    const handleClick = (e, path) => {
   e.preventDefault()
  window.open(`${path}`, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=1000,height=1000");
  };

  const classes = useStyles();
    return ( 
      <div className="btn-wrapper size-lg text-lg" style={{}}>
      <Button type="button" onClick={(e) => handleClick(e, socialLinks.twitter)} className={classes.twitter}>
      <i style={{filter: 'drop-shadow(0px 0px 5px white)'}} className="fa fa-twitter" />
      </Button>
        <Button type="button" onClick={(e) => handleClick(e, socialLinks.linkedin)} className={classes.linkedin}>
        <i style={{filter: 'drop-shadow(0px 0px 5px white)'}} className="fa fa-linkedin" />
        </Button>
        <Button type="button"  onClick={(e) => handleClick(e, socialLinks.github)} className={classes.github}>
        <i style={{filter: 'drop-shadow(0px 0px 5px white)'}} className="fa fa-github" />
        </Button>
        <Button type="button"  onClick={(e) => handleClick(e, socialLinks.resume)} style={{width: "233px"}} className={classes.resume}>
        <i style={{filter: 'drop-shadow(0px 0px 5px white)'}}>Resume</i>
        </Button>
        {/* <Button type="button" style={{width: "233px"}} className={classes.location}>
        <i className="ni ni-pin-3 text-info mr-2" />
        {"Remote"}
        </Button> */}
        </div>
     );
}
 


export default Resume;