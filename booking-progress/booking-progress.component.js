import React from "react"
import "./booking-progress.styles.scss"
import ProgressLine from "../assets/line.jpg";
import GreenProgressLine from "../assets/green-line.png"
import CheckMark from "../assets/green-check-mark.png"

const ProgressComponent = ({formStep}) => {
    return(
        <div className="progress-component">
            <div className="progress-item">
                <div className={formStep >= 2 ? "progress-icon-complete": "progress-icon-incomplete"}>
                    <img src={CheckMark} alt="aztec calendar"/>
                </div>

                <div className="progress-text">Contact Info</div>
            </div>
                <div className="progress-line">
                    { formStep >= 2 ?
                        (<img src={GreenProgressLine} alt="progress bar"/>)  :
                        (<img src={ProgressLine} alt="progress bar"/>)
                    }

                </div>
            <div className="progress-item">

                <div className={formStep >= 3 ? "progress-icon-complete": "progress-icon-incomplete"}>
                    <img src={CheckMark} alt="aztec calendar"/>
                </div>
                <div className="progress-text">Address</div>
            </div>
                <div className="progress-line">
                    { formStep >= 3 ?
                        (<img src={GreenProgressLine} alt="progress bar"/>)  :
                        (<img src={ProgressLine} alt="progress bar"/>)
                    }

                </div>


            <div className="progress-item">
                <div className={formStep >= 4 ? "progress-icon-complete": "progress-icon-incomplete"}>
                    <img src={CheckMark} alt="aztec calendar"/>
                </div>
                <div className="progress-text">Reserve Date & Time</div>
            </div>
        </div>
        )
}
export default ProgressComponent;