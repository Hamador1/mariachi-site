import React from "react";
import "./booking.styles.scss"

const BookingComponent = ({setBookingInProgress}) =>{
    const handleClick = () => {
        setBookingInProgress(true)
    }
    return (

        <div className="booking-component" onClick={handleClick} >
                <div className="plus-sign">+</div>
                <div className="create-new-booking-text">Create New Booking</div>
        </div>
    )
}
export default BookingComponent;