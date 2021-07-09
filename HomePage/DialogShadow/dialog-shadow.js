import React from "react";
import "./dialog-shadow.styles.scss"



const DialogShadow = ({setDialogOpen}) => {
    function close(){
        setDialogOpen(false);
    }

    return (
        <div onClick={close} className="dialog-shadow"></div>
    )
}

export default DialogShadow;