import React from 'react';

//import {  Button } from "reactstrap";
import { ExternalLink } from 'react-external-link';
import { socialLinks } from "../portfolio";
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import {Link} from 'react-scroll'
// import ThemeNesting from './Button';
const useStyles = makeStyles((theme) => ({
    flexGrow: {
      flex: '1',
    },
    twitter: {
      background: 'linear-gradient(45deg, #2196F3 30%, #80e5ff 90%)',
      '&:hover': {
        background: 'linear-gradient(45deg,  #2196F3 10%, #b3f0ff 90%)',
        color: '#3c52b2',
        boxShadow: '-1px -1px 1px 1px rgba(13, 13, 13, .3)'},
        boxShadow: '-1px -1px 4px 1px rgba(13, 13, 13, .3)',
      border: 0,
      fontSize: 16,
      borderRadius: 3,
      color: 'white',
      height: 48,
      padding: '0 30px',
      margin:'2px'
    },
    linkedin: {
      background: 'linear-gradient(45deg, #2196F3 30%, #80e5ff 90%)',
      '&:hover': {
        background: 'linear-gradient(45deg,  #2196F3 10%, #b3f0ff 90%)',
        color: '#3c52b2',
        boxShadow: '-1px -1px 1px 1px rgba(13, 13, 13, .3)'},
        boxShadow: '-1px -1px 4px 1px rgba(13, 13, 13, .3)',
      border: 0,
      fontSize: 16,
      borderRadius: 3,
      color: 'white',
      height: 48,
      padding: '0 30px',
      margin:'2px'
    },
    github: {
      background: 'linear-gradient(45deg, #1a1a1a 30%, #005266 90%)',
      '&:hover': {
        background: 'linear-gradient(45deg,  #1a1a1a 10%, #008fb3 90%)',
        color: 'black',
        boxShadow: '-1px -1px 1px 1px rgba(13, 13, 13, .3)'},
        boxShadow: '-1px -1px 4px 1px rgba(13, 13, 13, .3)',
      border: 0,
      fontSize: 16,
      borderRadius: 3,
      color: 'white',
      height: 48,
      padding: '0 30px',
      margin:'2px'
    },
    resume: {
      background: 'linear-gradient(45deg, #2196F3 30%, #80e5ff 90%)',
      '&:hover': {
        background: 'linear-gradient(45deg,  #2196F3 10%, #b3f0ff 90%)',
        color: '#3c52b2',
        boxShadow: '-1px -1px 1px 1px rgba(13, 13, 13, .3)'},
        boxShadow: '-1px -1px 4px 1px rgba(13, 13, 13, .3)',
      border: 0,
      fontSize: 16,
      borderRadius: 3,
      color: 'white',
      height: 48,
      padding: '0 30px',
      margin:'2px'
    },
    contact: {
      background: 'linear-gradient(45deg, #2196F3 30%, #80e5ff 90%)',
      '&:hover': {
        background: 'linear-gradient(45deg,  #2196F3 0%, #b3f0ff 100%)',
          boxShadow: '-1px -1px 1px 1px rgba(13, 13, 13, .3)'},
      boxShadow: '-1px -1px 4px 1px rgba(13, 13, 13, .3)',
      border: 0,
      fontSize: 16,
      borderRadius: 3,
      color: 'white',
      height: 48,
      padding: '0 30px',
      margin:'2px'
    },
    location: {
        background: 'linear-gradient(45deg, #2196F3 30%, #80e5ff 90%)',
        '&:hover': {
          background: 'linear-gradient(45deg,  #2196F3 0%, #b3f0ff 100%)',
          color: '#3c52b2',
          boxShadow: '-1px -1px 1px 1px rgba(13, 13, 13, .3)'},
      boxShadow: '-1px -1px 4px 1px rgba(13, 13, 13, .3)',
      border: 0,
      fontSize: 16,
      borderRadius: 3,
      color: 'black',
      height: 48,
      padding: '0 30px',
      margin:'2px'
    },
  }));

const Resume = () => {
  const classes = useStyles();
    return ( 
      <div className="btn-wrapper size-lg text-lg" style={{width: "300px"}}>
      <Button type="button" href={socialLinks.twitter} className={classes.twitter}>
      <i className="fa fa-twitter" />
      </Button>
        <Button type="button" href={socialLinks.linkedin} className={classes.linkedin}>
        <i className="fa fa-linkedin" />
        </Button>
        <Button type="button"  href={socialLinks.github} className={classes.github}>
        <i className="fa fa-github" />
        </Button>
        <Button type="button"  href={'https://bit.ly/brian-reed-resume'}  style={{width: "232px"}} className={classes.resume}>
        Resume
        </Button>
        <Button type="button" style={{width: "232px"}} className={classes.location}>
        <i className="ni ni-pin-3 text-info mr-2" />
        {"Remote"}
        </Button>
        </div>
     );
}
 


export default Resume;