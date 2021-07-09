import React from "react"
import "./contract-detail.styles.scss"
import editIcon from "../../assets/edit.svg"

const ContractDetail = ({data, name, setEditStep, formStep, setFormStep}) => {
    const handleClick = () => {
        // window.alert(name);

    if ( name === "Name" || name === "Email" || name === "Phone") {
        setEditStep(formStep);
        setFormStep(1)
    } else if ( name === "Address") {
        setEditStep(formStep);
        setFormStep(2);
    }else if ( name === "Price" || "Hours" || "Time Slot" ) {
        setEditStep(formStep);
        setFormStep(3)
    }

    }
    return (
        <div className="detail-item">
            <div>
                <span  className="name-detail">{name}:</span>
            </div>
            <div >

                <span  className="data-detail">{data}</span>
            </div>

            <div className="edit-icon" >

                <img onClick={handleClick} src={editIcon} alt="edit"/>
            </div>
        </div>
    );
}

export default ContractDetail;