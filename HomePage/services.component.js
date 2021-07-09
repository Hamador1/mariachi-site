import React from "react";
import {EventTypes} from "./data-for-services";
import ServiceComponent from "./service.component"
import "./services.styles.scss"


const Services = ({setEventType, setServiceDialogIcon,setEventDesc, setEventServicePageText}) => {
    return (
        <div  className="services-container">
            {EventTypes.map(eventType => (
                <div>
                <ServiceComponent
                    {...eventType}
                    setServiceDialogIcon={setServiceDialogIcon}
                    setEventType={setEventType}
                    setEventDesc={setEventDesc}
                    setEventServicePageText={setEventServicePageText}
                />
                </div>
            ))}
        </div>
    )
}

export default Services;