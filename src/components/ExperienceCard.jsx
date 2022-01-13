import React, {useState, createRef} from 'react';
import { ExternalLink } from 'react-external-link';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardHeader,
    Col
} from "reactstrap"; 
import ColorThief from "colorthief";
import Tilt from 'react-parallax-tilt';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Fade } from 'react-reveal';
const ExperienceCard = ({data}) => {
    const [colorArrays, setColorArrays] = useState([]);
    const imgRef = createRef();
    function getColorArrays() {
        const colorThief = new ColorThief();
        setColorArrays(colorThief.getColor(imgRef.current));
    }

    function rgb(values) {
        return typeof values === "undefined" ? null : "rgb(" + values.join(', ') + ")";
    }
    const useStyles = makeStyles((theme) => ({
    card: {
    background: `linear-gradient(85deg , black -10%, #005266 10%, #80e5ff  90%, white 110%)`,
    boxShadow: `inset 2px 00px 150px -100px white,inset 2px 2px 10px -5px steelblue, 0 0 3px -5px white,inset 2px -2px 2px -1px white, 0 0 5px -1px white, -2px 2px 4px steelblue, 2px -2px 20px steelblue;`,
    borderTop: '1px solid white;',
    borderRight: '1px solid white',
    '&:hover': {
    cursor: 'pointer'},
    border: 0,
    fontSize: 16,
    color: 'white',
    padding: '10px',
    margin:'3px',
    textShadow: '0 2px 2px black',
    textAlign: 'justify',
    userSelect: "none",
    borderRadius: '10px',
    filter: "drop-shadow(0px 0px 50px steelblue)",
    },
    }));
    const classes = useStyles();
    return ( 
        <Col lg="4">
        <Fade left duration={1000} exit={true}  distance="40px">
        <ExternalLink href={data.url}>
        <Tilt
            className="parallax-effect-img"
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            perspective={1500}
            transitionSpeed={9500}
            scale={1.08}
            gyroscope={true}
            glareEnable={false}
            >
            <div className={classes.card}  >
             <Card style={{background: rgb(colorArrays)}} >
             <img ref={imgRef} className=" bg-black rounded-circle mb-3 img-center img-fluid shadow-lg " top src={data.companylogo} style={{ height: '200px', width: "200px" }} onLoad={() => getColorArrays()} alt=""/>
             <h5 className="text-white text-center" style={{color: rgb(colorArrays)}}>{data.company}</h5>   
             </Card>
             <CardBody className="py-1">
             <div className="inner-element text-white  text-center">
             <CardTitle className="inner-element text-white" style={{textShadow: "0 0 10px white"}} tag="h5" >{data.role}</CardTitle>
             <div>
             <CardSubtitle style={{color: rgb(colorArrays)}} >{data.date}</CardSubtitle>
             <CardText className="description my-1 text-left text-white" style={{testShadow: rgb(colorArrays)}}>
             {data.desc}
             <ul>
                {
                 data.descBullets ? 
                 data.descBullets.map((desc) => {
                     return <li key={desc}>{desc}</li>
                }) : null
                }
             </ul>
             </CardText>
             </div>
             </div>
             </CardBody>
            </div>
            </Tilt>
            </ExternalLink>
            </Fade>
        </Col>
     );
}
export default ExperienceCard;