import React from "react";
import "./service.styles.scss"
import {Button} from "react-bootstrap";

const ServiceComponent = ({setEventType, setServiceDialogIcon,setEventDesc, setEventServicePageText, ...eventType}) => {

    const handleServiceClick = () =>  {
        setEventType(eventType.name);
        setEventDesc(eventType.desc);
        setEventServicePageText(eventType.servicePageText);
        setServiceDialogIcon(eventType.icon);

    }
    return (
        <div onClick={handleServiceClick}  className="service-details-container" >
            <div className="service-title">{eventType.name}</div>
            <div className="service-text">{eventType.servicePageText}</div>
            <Button className="learn-more-button" style={{borderRadius: "20px"}} variant="outlined">
                <span>Learn More</span>
            </Button>
        </div>
    )
}

export default ServiceComponent;