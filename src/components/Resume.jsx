import React, {useState, useEffect} from 'react';

//import {  Button } from "reactstrap";
import { ExternalLink } from 'react-external-link';
import { socialLinks } from "../portfolio";
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Transition } from "react-spring/renderprops";
import {Link} from 'react-scroll'
// import ThemeNesting from './Button';
const useStyles = makeStyles((theme) => ({
  root: {
    animation: "fadeIn .2s ease-in-out",
    flexGrow: 1,
    margin: '-8px',
  },
  twitter: {
    background: 'linear-gradient(80deg, #2196F3 30%, #80e5ff 90%)',
    boxShadow: '0px 1px 1px 1px rgba(113, 213, 213, .3)',
    '&:hover': {
      animation: "fadeIn .2s ease-in-out",
      background: 'linear-gradient(145deg,  #2196F3 10%, #b3f0ff 90%)',
      color: 'white',
      boxShadow: '0px  1px 1px 1px rgba(113, 213, 213, .5)',
      marginTop: '0px',},
    border: 0,
    fontSize: 16,
    borderRadius: 5,
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin:'3px'
  },
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
      transform: "translateY(5rem)"
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)"
    }
  },
  linkedin: {
    background: 'linear-gradient(80deg, #2196F3 30%, #80e5ff 90%)',
    boxShadow: '0px 1px 1px 1px rgba(113, 213, 213, .5)',
    '&:hover': {
      background: 'linear-gradient(145deg,  #2196F3 10%, #b3f0ff 90%)',
      color: 'white',
      boxShadow: '0px  2px 1px 1px rgba(113, 213, 213, .3)',
      marginTop: '0px',},
    border: 0,
    fontSize: 16,
    borderRadius: 5,
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin:'3px'
  },
  github: {
    background: 'linear-gradient(85deg, #1a1a1a 30%, #005266 90%)',
    boxShadow: '0px 1px 1px 1px rgba(13, 53, 53, .5)',
    '&:hover': {
      background: 'linear-gradient(145deg,  #1a1a1a 10%, #008fb3 90%)',
      color: '#fff',
      boxShadow: '0px 1px 1px 1px rgba(13, 53, 53, .3)',
      marginTop: '0px',
    padding:'5px 30px'},
    border: 0,
    fontSize: 16,
    borderRadius: 3,
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin:'2px'
  },
  resume: {
    background: 'linear-gradient(80deg, #2196F3 30%, #80e5ff 90%)',
    boxShadow: '0px 1px 1px 1px rgba(113, 213, 213, .5)',
    '&:hover': {
      background: 'linear-gradient(145deg,  #2196F3 10%, #b3f0ff 90%)',
      color: 'white',
      boxShadow: '0px  2px 1px 1px rgba(113, 213, 213, .3)',
      marginTop: '0px',},
    border: 0,
    fontSize: 16,
    borderRadius: 5,
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin:'3px'
  },
  contact: {
    background: 'linear-gradient(80deg, #2196F3 30%, #80e5ff 90%)',
    boxShadow: '0px 1px 1px 1px rgba(113, 213, 213, .5)',
    '&:hover': {
      background: 'linear-gradient(145deg,  #2196F3 10%, #b3f0ff 90%)',
      color: 'white',
      boxShadow: '0px  2px 1px 1px rgba(113, 213, 213, .3)',
      marginTop: '0px',},
    border: 0,
    fontSize: 16,
    borderRadius: 5,
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin:'3px'
  },
  location: {
    background: 'linear-gradient(80deg, #2196F3 30%, #80e5ff 90%)',
    boxShadow: '0px 1px 1px 1px rgba(113, 213, 213, .5)',
    '&:hover': {
      background: 'linear-gradient(145deg,  #2196F3 10%, #b3f0ff 90%)',
      color: 'white',
      boxShadow: '0px  2px 1px 1px rgba(113, 213, 213, .3)',
      marginTop: '0px',},
    border: 0,
    fontSize: 16,
    borderRadius: 5,
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin:'3px'
  },
}));

const Resume = () => {
  const classes = useStyles();
  const [show, set] = useState(false);
    return ( 

      <div>
      <button onClick={() => set(!show)}>toggle</button>
      <Transition
        items={show}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {(show) =>
          show &&
          ((props) => (
            <div style={props}>
              <span role="img" aria-label="smile">
                ✌
              </span>
              ️
            </div>
          ))
        }
      </Transition>
    </div>

     );
}
 


export default Resume;