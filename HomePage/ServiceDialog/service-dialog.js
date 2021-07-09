import React from "react";
import "./service-dialog.styles.scss"
import DialogShadow from "../DialogShadow/dialog-shadow";
import styled from 'styled-components';
import {Button} from "react-bootstrap";
import logo from "../../assets/TA_Logo.png"
import Login from "../../components/login/login";


export const OpenServiceIcon = styled.div`
  height: 100%;
  background-image: ${({icon}) => `url(${icon})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% ;
  border-radius: 10px;
  width: 100%;
  display: grid;
  `
function ServiceDialogContainer({ setUserName, setUserEmail, userName, userEmail, user, setUser, isSignedIn, setIsSignedIn, eventType, serviceDialogIcon, setEventType, eventDesc, eventServicePageText}){



    return (
        <>
            <DialogShadow setEventType={setEventType} />

            <div className="service-dialog-container"  >

                <div className="service-dialog-title">
                    {eventType}

                </div>

                {/*<div className="service-dialog-img ">*/}
                {/*    <OpenServiceIcon icon={serviceDialogIcon}/>*/}

                {/*</div>*/}

                <div className="service-dialog-text ">
                    <p1>{eventDesc}</p1>
                </div>
                <Login
                    setUserName={setUserName}
                    setUserEmail={setUserEmail}
                    user={user}
                    setUser={setUser}
                    isSignedIn={isSignedIn}
                    setIsSignedIn={setIsSignedIn}
                />
                <div className="service-dialog-buttons">
                    <Button>Close</Button>
                    <Button>Online Booking</Button>
                </div>
                <div className="service-dialog-logo-container">
                    <img src={logo} alt="mariachi logo"/>
                </div>


                <div className="service-dialog-logo"></div>


            </div>
        </>


    )
}

export function ServiceDialog({ userEmail,  userName,setUserName,setUserEmail,user, setUser, isSignedIn, setIsSignedIn, setEventType, eventType, serviceDialogIcon, eventDesc,eventServicePageText}) {
    if( eventType === null ) return null;
    return <ServiceDialogContainer
        setUserName={setUserName}
        userName={userName}
        setUserEmail={setUserEmail}
        userEmail={userEmail}
        user={user}
        setUser={setUser}
        isSignedIn={isSignedIn}
        setIsSignedIn={setIsSignedIn}
        serviceDialogIcon={serviceDialogIcon}
        setEventType={setEventType}
        eventType={eventType}
        eventDesc={eventDesc}
        eventServicePageText={eventServicePageText}
    />
}