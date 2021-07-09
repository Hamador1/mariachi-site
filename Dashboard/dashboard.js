import React, {useContext, useEffect, useState} from "react";
import {useDisplayName} from "../hooks/useDisplayName";
import CurrentUserContext from "../contexts/current-user.context";
import {useAuth} from "../contexts/AuthContext";
import {Button} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import groupPhoto from "../assets/mariachi-group-pic.svg";
import "./dashboard.styles.scss"

import BookingComponent from "../components/booking-component/booking-component";
import {BookingDialog} from "./BookingDialog/booking-dialog";
import {auth, createUserBookingDocument, createUserProfileDocument, getBookingRequests} from "../firebase/firebase";
import LoadBookingContainer from "../components/load-bookings/load-bookings.component";
import {ExistingBookingDialog} from "../components/load-bookings/existing-booking-dialog";
import {DeleteBookingDialog} from "../components/load-bookings/delete-booking-dialog";

const Dashboard = () => {
    let bookingRef;
    let bookingArray= [];
    const history = useHistory();
    const [bookingArrayState, setBookingArrayState]  = useState([]);
    const [ isBookingArray, setIsBookingArray] = useState(false);
    const {currentUser, setCurrentUser} = useAuth();
    console.log("Current User below")
    console.log(currentUser);

    const [dialogOpen, setDialogOpen ] = useState(false);
    const[ deleteBookingInProgress, setDeleteBookingInProgress] = useState(false);

    const[ bookingInProgress, setBookingInProgress] = useState(false);
    const  [ loadBookingInProgress, setLoadBookingInProgress ] = useState(false);


    useEffect(()=>{
        auth.onAuthStateChanged(async userAuth => {
            if(userAuth){

               // // createUserBookingDocument(userAuth.uid)
               //
               //  userRef.onSnapshot(snapShot => {
               //      setCurrentUser({
               //          id: snapShot.id,
               //          ...snapShot.data()
               //      });
               //  });

                 bookingRef = await getBookingRequests(userAuth.uid)
                console.log("booking ref below");
                console.log({bookings:  bookingRef.docs.map(doc => doc.data())});

                bookingRef.docs.map(doc => {
                    bookingArray = [...bookingArray, doc.data()];
                    console.log("Doc.data below");
                    console.log(doc.data());


                })

                setBookingArrayState({...bookingArray});



            }else {
                setCurrentUser(null);
            }
        })
    }, [dialogOpen, bookingInProgress])
    console.log("array state length")
    console.log(Object.keys(bookingArrayState).length);
    console.log("array values")

  //  console.log(Object.values(bookingArrayState[0]));


    return (

        <div>

            <div className="homepage">
                <div  className="title-container">
                    <div className="mariachi-title-dash">MARIACHI</div>
                    <div className="tierra-azteca-title-dash">TIERRA AZTECA</div>
                </div>


                <BookingDialog bookingInProgress={bookingInProgress} setBookingInProgress={setBookingInProgress}/>
                {currentUser && (
                    <div className="welcome-text">
                        <h1 className="text-center">Welcome {currentUser.displayName}</h1>
                    </div>
                )}
                <div className="bookings-container">
                    <BookingComponent setBookingInProgress={setBookingInProgress} />
                    <div className=" mt-5">
                        {Object.keys(bookingArrayState).length > 0 && (

                            Object.values(bookingArrayState).map(booking => (
                                <div>

                                    <LoadBookingContainer
                                        setDialogOpen={setDialogOpen}
                                        date={booking.Date}
                                        name={booking.Name}
                                        address={booking.Address}
                                        phone={booking.Phone}
                                        email={booking.Email}
                                        timeSlot={booking.TimeSlot}
                                        total={booking.Total}
                                        size={booking.Size}
                                        status={booking.Status}
                                        statusColor={booking.StatusColor}
                                        loadBookingInProgress={loadBookingInProgress}
                                        setLoadBookingInProgress={setLoadBookingInProgress}
                                        setDeleteBookingInProgress={setDeleteBookingInProgress}
                                        deleteBookingInProgress={deleteBookingInProgress}
                                    />
                                    <ExistingBookingDialog

                                        date={booking.Date}
                                        name={booking.Name}
                                        address={booking.Address}
                                        phone={booking.Phone}
                                        email={booking.Email}
                                        timeSlot={booking.TimeSlot}
                                        total={booking.Total}
                                        size={booking.Size}
                                        status={booking.Status}
                                        statusColor={booking.StatusColor}
                                        loadBookingInProgress={loadBookingInProgress} setLoadBookingInProgress={setLoadBookingInProgress} />
                                    <DeleteBookingDialog
                                        setDialogOpen={setDialogOpen}
                                        dialogOpen={dialogOpen}
                                        date={booking.Date}
                                        name={booking.Name}
                                        address={booking.Address}
                                        phone={booking.Phone}
                                        email={booking.Email}
                                        timeSlot={booking.TimeSlot}
                                        total={booking.Total}
                                        size={booking.Size}
                                        status={booking.Status}
                                        statusColor={booking.StatusColor}
                                        docId={booking.docId}
                                    />

                                    {console.log("BookingFOREACH BElow")}

                                    {console.log(booking.Address)}
                                </div>
                            )))}
                    </div>

                </div>
                {bookingArray.length > 0  &&(
                    <div>{JSON.stringify(bookingArray)} not null array </div>
                )}
                {/*{Object.keys(bookingArrayState).length > 0 && (*/}

                {/*Object.values(bookingArrayState).map(booking => (*/}
                {/*    <div>*/}

                {/*        <LoadBookingsComponent*/}
                {/*            date={booking.Date}*/}
                {/*            name={booking.Name}*/}
                {/*            address={booking.Address}*/}
                {/*            phone={booking.Phone}*/}
                {/*            email={booking.Email}*/}
                {/*            timeSlot={booking.TimeSlot}*/}
                {/*            total={booking.Total}*/}
                {/*            size={booking.Size}*/}
                {/*        />*/}

                {/*        {console.log("BookingFOREACH BElow")}*/}

                {/*        {console.log(booking.Address)}*/}
                {/*    </div>*/}

                {/*    ))*/}
                {/*)*/}
                {/*}*/}



            </div>


        </div>
    )
}
export default Dashboard;