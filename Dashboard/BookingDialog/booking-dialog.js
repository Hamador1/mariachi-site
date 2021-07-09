import React from "react";
import"./booking-dialog.styles.scss"
import StartNewBooking from "../../components/start-new-booking.component";
import DialogShadow from "../../HomePage/DialogShadow/booking-dialog-shadow";


function BookingDialogContainer({setBookingInProgress}){



    return (
        <>
            <DialogShadow setBookingInProgress={setBookingInProgress} />

            <div className="booking-dialog-container"  >
                <StartNewBooking setBookingInProgress={setBookingInProgress} />



            </div>
        </>


    )
}

export function BookingDialog({bookingInProgress, setBookingInProgress}) {
    if( bookingInProgress === false ) return null;
    return <BookingDialogContainer setBookingInProgress={setBookingInProgress}/>
}