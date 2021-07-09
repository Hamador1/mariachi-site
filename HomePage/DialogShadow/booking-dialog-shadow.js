import React from "react";
import "./dialog-shadow.styles.scss"



const DialogShadow = ({ setBookingInProgress}) => {
    function close(){
        setBookingInProgress(false);
    }

    return (
        <div onClick={close} className="dialog-shadow"></div>
    )
}

export default DialogShadow;