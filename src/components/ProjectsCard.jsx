import React, {useState, createRef} from 'react';
import {Link} from 'react-scroll'
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
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
            <ExternalLink href="https://brian-reed-networking-app.herokuapp.com/">
            <Card style={{flex: 1}} className="card-lift--hover card2 justify-content-center shadow-lg--hover shadow border-0 text-center rounded">
                <CardHeader style={{background: rgb(colorArrays)}} >
                    <h5 className="title text-white"><a href="https://brian-reed-networking-app.herokuapp.com/">{'Networking App'}</a></h5>
                    {/* data.company  */}
                </CardHeader>
                <CardBody className="py-5">
                <a href="https://brian-reed-networking-app.herokuapp.com/"><img ref={imgRef} className=" bg-black  mb-3 img-center img-fluid shadow-lg " top src={data.companylogo} style={{ width: "100%" }} onLoad={() => getColorArrays()} alt=""/></a>
                    <CardTitle tag="h5">{data.role}</CardTitle>
                    <CardSubtitle>{data.date}</CardSubtitle>
                    <CardText className="description my-3 text-left">
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
                    <div>
                    </div>
                </CardBody>
            </Card>
            </ExternalLink>
            {/* </ResizableBox>
            </Draggable> */}
        </Fade>
        </Col>
     );
}
 
export default ProjectsCard;