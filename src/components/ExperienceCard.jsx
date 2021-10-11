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

    return ( 
        <Col lg="4">
        <Fade left duration={1000} exit={true}  distance="40px">
        <ExternalLink href={data.url}>
                <Tilt
                style={{filter: "drop-shadow(0px 0px 40px black)"}}
            className="parallax-effect-img"
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            perspective={1500}
            transitionSpeed={9500}
            scale={1.08}
            gyroscope={true}
            glareEnable={true}
        >
            <Card style={{flex: 1}} className="shadow-lg--hover bg-black shadow border-1 text-center rounded">
                <Card style={{background: rgb(colorArrays)}} >
                <img ref={imgRef} className=" bg-black rounded-circle mb-3 img-center img-fluid shadow-lg " top src={data.companylogo} style={{ width: "125px" }} onLoad={() => getColorArrays()} alt=""/>
                    <h5 className="text-white" style={{color: rgb(colorArrays), filter: `drop-shadow(0px 2px 3px ${rgb(colorArrays)})`}}>{data.company}</h5>

                </Card>
                <CardBody className="py-1">
                <div className="inner-element">
                    <CardTitle tag="h5" >{data.role}</CardTitle>
                    <div>
                    <CardSubtitle style={{color: rgb(colorArrays)}} >{data.date}</CardSubtitle>
                    <CardText className="description my-1 text-left" style={{color: rgb(colorArrays),filter: `drop-shadow(0px 2px 50px ${rgb(colorArrays)})`}}>
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
            </Card>
            </Tilt>
            </ExternalLink>
            </Fade>
        </Col>
     );
}
 
export default ExperienceCard;