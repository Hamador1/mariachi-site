import React, {useEffect, useState} from "react";
import "./home-page.styles.scss";
import groupPhoto from "../assets/mariachi-group-pic.svg"
import Services from "./services.component";
import {ServiceDialog} from "./ServiceDialog/service-dialog";
import {auth, createUserProfileDocument} from "../firebase/firebase";
import {useAuth} from "../contexts/AuthContext";
// import groupPhoto from "../assets/group-pic.png"

const HomePage = () =>  {
    const { currentUser, setCurrentUser } =useAuth();
    const [eventType, setEventType ] = useState(null);
    const [eventServicePageText, setEventServicePageText] = useState();
    const [eventDesc, setEventDesc ] = useState();
    const [serviceDialogIcon, setServiceDialogIcon]= useState();
    const [userEmail, setUserEmail] = useState();
    const [userName, setUserName] = useState();
    const [user, setUser] = useState();

    const [isSignedIn, setIsSignedIn] = useState();

    useEffect(()=>{
        auth.onAuthStateChanged(async userAuth => {
            if(userAuth){


                const userRef = await createUserProfileDocument(userAuth);

               userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    });
                });

            }else {
                setCurrentUser(null);
            }
        })
    }, [])

    return (
        <div className="homepage">
            <div  className="title-container">
                <div className="mariachi-title">MARIACHI</div>
                <div className="tierra-azteca-title">TIERRA AZTECA</div>
            </div>
                <div className="group-photo-container">
                    <img className="group-photo" src={groupPhoto} alt="group picture" />
                </div>
            <div>
                <div>Online Booking</div>
                <div>Services</div>
                <div>About</div>

            </div>
                <ServiceDialog
                    userEmail={userEmail}
                    setUserEmail={setUserEmail}
                    userName={userName}
                    setUserName={setUserName}
                    setIsSignedIn={setIsSignedIn}
                    isSignedIn={isSignedIn}
                    user={user}
                    setUser={setUser}
                    serviceDialogIcon={serviceDialogIcon}
                    eventServicePageText={eventServicePageText}
                    eventDesc={eventDesc}
                    eventType={eventType}
                    setEventType={setEventType}/>
                <h1>{eventType}</h1>
                <Services
                    setServiceDialogIcon={setServiceDialogIcon}
                    setEventType={setEventType}
                    setEventServicePageText={setEventServicePageText}
                    setEventDesc={setEventDesc}
                />



        </div>

    )
}

export default HomePage;