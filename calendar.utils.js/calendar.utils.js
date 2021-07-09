


export const populateSurroundingEvents = (eventsArray, hours) => {
    eventsArray.map(event => {
        const modMin = parseInt(event.substring(3,5));
        const modHr = parseInt(event.substring(0,2));
        console.log("ModHr Below")
        console.log(modHr);

        let newHr = modHr;

        let newTime = newHr.toString() +":"+  modMin.toString() + ":00-07:00"
        let padHour = "";
        switch (modMin) {
            case 0:
                for ( let i=0; i <= hours; i++){
                    newHr = modHr - i;

                    if( newHr < 10) {
                        padHour = "0" + newHr.toString()
                    }else {
                        padHour = newHr.toString()
                    }
                    newTime = padHour + ":00" + ":00-07:00"
                    eventsArray = [...eventsArray , newTime];

                    newTime = padHour +":15:00-07:00"
                    eventsArray = [...eventsArray , newTime];

                    newTime = padHour +":30:00-07:00"
                    eventsArray = [...eventsArray , newTime];

                    newTime = padHour +":45:00-07:00"
                    eventsArray = [...eventsArray , newTime];
                }
                newHr = modHr - (hours+1);
                if( newHr < 10) {
                    padHour = "0" + newHr.toString()
                }else {
                    padHour = newHr.toString()
                }
                newTime = padHour +":45:00-07:00"
                eventsArray = [...eventsArray , newTime];

                for (let i=1; i < hours; i++) {
                    newHr = modHr + i;
                    if( newHr < 10) {
                        padHour = "0" + newHr.toString()
                    }else {
                        padHour = newHr.toString()
                    }
                    newTime = padHour +":00:00-07:00"
                    eventsArray = [...eventsArray , newTime];

                    newTime = padHour +":15:00-07:00"
                    eventsArray = [...eventsArray , newTime];

                    newTime = padHour +":30:00-07:00"
                    eventsArray = [...eventsArray , newTime];

                    newTime = padHour +":45:00-07:00"
                    eventsArray = [...eventsArray , newTime];

                }
                newHr = modHr + hours
                if( newHr < 10) {
                    padHour = "0" + newHr.toString()
                }else {
                    padHour = newHr.toString()
                }

                newTime = padHour +":00:00-07:00"
                eventsArray = [...eventsArray , newTime];

                newTime = padHour +":15:00-07:00"
                eventsArray = [...eventsArray , newTime];


                break;
            case 15:
                for ( let i=0; i <= hours; i++){
                    newHr = modHr - i;
                    if( newHr < 10) {
                        padHour = "0" + newHr.toString()
                    }else {
                        padHour = newHr.toString()
                    }
                    newTime = padHour + ":00" + ":00-07:00"
                    eventsArray = [...eventsArray , newTime];

                    newTime = padHour +":15:00-07:00"
                    eventsArray = [...eventsArray , newTime];

                    newTime = padHour +":30:00-07:00"
                    eventsArray = [...eventsArray , newTime];

                    newTime = padHour +":45:00-07:00"
                    eventsArray = [...eventsArray , newTime];
                }

                for (let i=1; i <= hours; i++) {
                    newHr = modHr + i;
                    if( newHr < 10) {
                        padHour = "0" + newHr.toString()
                    }else {
                        padHour = newHr.toString()
                    }
                    newTime = padHour +":00:00-07:00"
                    eventsArray = [...eventsArray , newTime];

                    newTime = padHour +":15:00-07:00"
                    eventsArray = [...eventsArray , newTime];

                    newTime = padHour +":30:00-07:00"
                    eventsArray = [...eventsArray , newTime];

                    let lastCheck = i+1
                    if (hours >= lastCheck){
                        newTime = padHour +":45:00-07:00"
                        eventsArray = [...eventsArray , newTime];

                    }


                }

                break;
            case 30:
                for ( let i=0; i <= hours; i++){
                    newHr = modHr - i;
                    if( newHr < 10) {
                        padHour = "0" + newHr.toString()
                    }else {
                        padHour = newHr.toString()
                    }
                    let hourCheck = i+1;
                    if (hourCheck <= hours ) {
                        newTime = padHour + ":00" + ":00-07:00"
                        eventsArray = [...eventsArray , newTime];
                    }


                    newTime = padHour +":15:00-07:00"
                    eventsArray = [...eventsArray , newTime];

                    newTime = padHour +":30:00-07:00"
                    eventsArray = [...eventsArray , newTime];

                    newTime = padHour +":45:00-07:00"
                    eventsArray = [...eventsArray , newTime];
                }

                for (let i=1; i <= hours; i++) {
                    newHr = modHr + i;
                    if( newHr < 10) {
                        padHour = "0" + newHr.toString()
                    }else {
                        padHour = newHr.toString()
                    }
                    newTime = padHour +":00:00-07:00"
                    eventsArray = [...eventsArray , newTime];

                    newTime = padHour +":15:00-07:00"
                    eventsArray = [...eventsArray , newTime];

                    newTime = padHour +":30:00-07:00"
                    eventsArray = [...eventsArray , newTime];

                    newTime = padHour +":45:00-07:00"
                    eventsArray = [...eventsArray , newTime];
                }
                break;
            case 45:

                for ( let i=0; i <= hours; i++){
                    newHr = modHr - i;
                    if( newHr < 10) {
                        padHour = "0" + newHr.toString()
                    }else {
                        padHour = newHr.toString()
                    }
                    let hourCheck = i+1;
                    if (hourCheck <= hours ) {
                        newTime = padHour + ":00" + ":00-07:00"
                        eventsArray = [...eventsArray , newTime];
                        newTime = padHour +":15:00-07:00"
                        eventsArray = [...eventsArray , newTime];
                    }




                    newTime = padHour +":30:00-07:00"
                    eventsArray = [...eventsArray , newTime];

                    newTime = padHour +":45:00-07:00"
                    eventsArray = [...eventsArray , newTime];
                }

                for (let i=1; i <= hours; i++) {
                    newHr = modHr + i;
                    if( newHr < 10) {
                        padHour = "0" + newHr.toString()
                    }else {
                        padHour = newHr.toString()
                    }
                    newTime = padHour +":00:00-07:00"
                    eventsArray = [...eventsArray , newTime];

                    newTime = padHour +":15:00-07:00"
                    eventsArray = [...eventsArray , newTime];

                    newTime = padHour +":30:00-07:00"
                    eventsArray = [...eventsArray , newTime];

                    newTime = padHour +":45:00-07:00"
                    eventsArray = [...eventsArray , newTime];

                    let lastCheck = i+1
                    if (hours < lastCheck){
                        newHr = modHr + lastCheck;
                        if( newHr < 10) {
                            padHour = "0" + newHr.toString()
                        }else {
                            padHour = newHr.toString()
                        }
                        newTime = padHour +":00:00-07:00"
                        eventsArray = [...eventsArray , newTime];

                    }
                }

                break;
        }
    })
    return eventsArray;
}