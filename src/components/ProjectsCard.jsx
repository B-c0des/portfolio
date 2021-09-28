import React, {useState, createRef} from 'react';
import {Link} from 'react-scroll'
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import { ExternalLink } from 'react-external-link';
import Tilt from 'react-parallax-tilt';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardHeader,
    Col,
    CardColumns,
} from "reactstrap"; 
import ColorThief from "colorthief";
import BackdropFilter from "react-backdrop-filter";

import { Fade } from 'react-reveal';



const ProjectsCard = ({data}) => {
    const [colorArrays, setColorArrays] = useState([]);
    const imgRef = createRef();

    function getColorArrays() {
        const colorThief = new ColorThief();
        setColorArrays(colorThief.getColor(imgRef.current));
    }

    function rgb(values) {
        return typeof values === "undefined" ? null : "rgb(" + values.join(', ') + ")";
    }
    const [width, setWidth] = useState(500);
    const [height, setHeight] = useState(800);
  

    return ( 
        <Col lg="4">
        {/* <Draggable
        defaultPosition={{ x: 10, y: 10 }}
        onDrag={() => console.log("onDrag")}
        cancel={".react-resizable-handle"}
      >
        <ResizableBox
          width={width}
          height={height}
          onResize={(e, data) => {
            setWidth(data.size.width);
            setHeight(data.size.height);
          }}
          resizeHandles={["e"]}
        > */}
        <Fade left duration={1000} distance="40px">
            <ExternalLink href={data.myLink}>
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
    <div className="inner-element">
            <Card className="shadow" style={{flex: 1}} style={{color: rgb(colorArrays)}} className="card1 justify-content-center  shadow shadow-lg--hover  shadow text-center rounded">
            
                <Card className="shadow" style={{background: rgb(colorArrays)}} >
                <img ref={imgRef} className=" bg-black  mb-3 img-center img-fluid" top src={data.companyname} style={{borderRadius: "5%" }} onLoad={() => getColorArrays()} alt=""/>
                    {/* data.company  */}
                </Card>
                <CardBody className="py-1 shadow">
                
                {/* style={{borderRadius: "100%" }} */}
                <img className=" bg-black  mb-3 img-center img-fluid" top src={data.companylogo} style={{borderRadius: "10px" }}  alt=""/>
                {data.date}
                    <CardText className="description my-3 text-left" style={{color: rgb(colorArrays)}}>
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
                </CardBody>
            </Card>
            </div>
            </Tilt>
            </ExternalLink>
            {/* </ResizableBox>
            </Draggable> */}
        </Fade>
        
        </Col>
     )
}
 
export default ProjectsCard;