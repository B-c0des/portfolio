import React, {useState, createRef} from 'react';
import { ExternalLink } from 'react-external-link';
import ColorThief from "colorthief";
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {
    Card,
    CardBody,
    Badge
} from "reactstrap";
import Tilt from 'react-parallax-tilt';

import { Fade } from 'react-reveal';

const EducationCard = ({education}) => {
    const [colorArrays, setColorArrays] = useState([]);
    const imgRef = createRef();

    function getColorArrays() {
        const colorThief = new ColorThief();
        setColorArrays(colorThief.getColor(imgRef.current));
    }
 const useStyles = makeStyles((theme) => ({
  card: {
 background: `linear-gradient(80deg, steelblue 30%, #80e5ff 90%)`,
     boxShadow: `inset 4px -4px 8px 0px white, 0 0 5px -1px white, -2px 2px 4px  ${rgb(colorArrays)}, 2px -2px 4px  ${rgb(colorArrays)};`,
    borderTop: '1px solid white;',
    '&:hover': {
      
      cursor: 'grab'},
    border: 0,
    fontSize: 16,
        color: 'white',
        padding: '10px',
    margin:'3px',
    textShadow: '0 2px 2px black',
    textAlign: 'justify',
        userSelect: "none",
        borderRadius: '10px',
  },
 
    }));
    

     const classes = useStyles();
    function rgb(values) {
        return typeof values === "undefined" ? null : "rgb(" + values.join(', ') + ")";
    }

    const [width, setWidth] = useState(500);
    const [height, setHeight] = useState(800);
    return ( 

        <Fade right duration={1000} distance="40px" >
            <ExternalLink href="https://catalog.pcc.edu/programsanddisciplines/computerscience/">
            <Tilt
                    className="parallax-effect-img"
                    tiltMaxAngleX={12}
                    tiltMaxAngleY={12}
                    perspective={2000}
                    transitionSpeed={9500}
                    scale={1.1}
                    gyroscope={true}
                    glareEnable={true}
                >
            <div  className={classes.card}  >
                
                    <div className={classes.card} className="text-center shadow" style={{background: rgb(colorArrays)}} >
                      <img ref={imgRef} className=" bg-black rounded-circle mb-3 img-center img-fluid shadow-lg " top src={education.schoolLogo} style={{ width: "125px" }} onLoad={() => getColorArrays()} alt=""/>
                    <h5 className="text-info text-center text-white" >{education.schoolName}</h5>
                     </div>

                        <h5 className="ml-4 text-center" >{education.subHeader}
                        <Badge color="info" className="ml-4 text-center">
                        {education.duration}
                        </Badge>
                        </h5>

                        <p className="description mt-3 text-white">
                            {education.desc}
                            <ul>
                            {
                                education.descBullets ? 
                                education.descBullets.map((desc) => {
                                    return <li key={desc}>{desc}</li>
                                }) : null
                            }
                        </ul>
                        </p>
                    </div>

            </Tilt>
            </ExternalLink>
        </Fade>
     );
}
 
export default EducationCard;