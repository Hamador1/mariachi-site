const TIME_STARTS = [
    {
    timeSlot: "6:00-7:00am",
    timeStart: "06:00:00-07:00",
    },
    {
        timeSlot: "6:15-7:15am",
        timeStart: "06:15:00-07:00"
    },
    {
        timeSlot: "6:30-7:30am",
        timeStart: "06:30:00-07:00"
    },
    {
        timeSlot: "6:45-7:45am",
        timeStart: "06:45:00-07:00"
    },
    {
        timeSlot: "7:00-8:00am",
        timeStart: "07:00:00-07:00"
    },
    {
        timeSlot: "7:15-8:15am",
        timeStart: "07:15:00-07:00"
    },{
        timeSlot: "7:30-8:30am",
        timeStart: "07:30:00-07:00"
    },
    {
        timeSlot: "7:45-8:45am",
        timeStart: "07:45:00-07:00"
    },
    {
        timeSlot: "8:00-9:00am",
        timeStart: "08:00:00-07:00"
    },
    {
        timeSlot: "8:15-9:15am",
        timeStart: "08:15:00-07:00"
    },
    {
        timeSlot: "8:30-9:30am",
        timeStart: "08:30:00-07:00"
    },
    {
        timeSlot: "8:45-9:45am",
        timeStart: "08:45:00-07:00"
    },
    {
        timeSlot: "9:00-10:00am",
        timeStart: "09:00:00-07:00"
    },
    {
        timeSlot: "9:15-10:15am",
        timeStart: "09:15:00-07:00"
    },
    {
        timeSlot: "9:30-10:30am",
        timeStart: "09:30:00-07:00"
    },
    {
        timeSlot: "9:45-10:45am",
        timeStart: "09:45:00-07:00"
    },
    {
        timeSlot: "10:00-11:00am",
        timeStart: "10:00:00-07:00"
    },
    {
        timeSlot: "10:15-11:15am",
        timeStart: "10:15:00-07:00"
    },
    {
        timeSlot: "10:30-11:30am",
        timeStart: "10:30:00-07:00"
    },
    {
        timeSlot: "10:45-11:45am",
        timeStart: "10:45:00-07:00"
    },
    {
        timeSlot: "11:00-12:00am",
        timeStart: "11:00:00-07:00"
    },
    {
        timeSlot: "11:15-12:15am",
        timeStart: "11:15:00-07:00"
    },
    {
        timeSlot: "11:30-12:30am",
        timeStart: "11:30:00-07:00"
    },
    {
        timeSlot: "11:45-12:45am",
        timeStart: "11:45:00-07:00"
    },
    {
        timeSlot: "12:00-01:00pm",
        timeStart: "12:00:00-07:00"
    },
    {
        timeSlot: "12:15-01:15pm",
        timeStart: "12:15:00-07:00"
    },
    {
        timeSlot: "12:30-01:30pm",
        timeStart: "12:30:00-07:00"
    },
    {
        timeSlot: "12:45-01:45pm",
        timeStart: "12:45:00-07:00"
    },
    {
        timeSlot: "01:00-02:00pm",
        timeStart: "13:00:00-07:00"
    },
    {
        timeSlot: "01:15-02:15pm",
        timeStart: "13:15:00-07:00"
    },
    {
        timeSlot: "01:30-02:30pm",
        timeStart: "13:30:00-07:00"
    },
    {
        timeSlot: "01:45-02:45pm",
        timeStart: "13:45:00-07:00"
    },
    {
        timeSlot: "02:00-03:00pm",
        timeStart: "14:00:00-07:00"
    },
    {
        timeSlot: "02:15-03:15pm",
        timeStart: "14:15:00-07:00"
    },
    {
        timeSlot: "02:30-03:30pm",
        timeStart: "14:30:00-07:00"
    },
    {
        timeSlot: "02:45-03:45pm",
        timeStart: "14:45:00-07:00"
    },
    {
        timeSlot: "03:00-04:00pm",
        timeStart: "15:00:00-07:00"
    },
    {
        timeSlot: "03:15-04:15pm",
        timeStart: "15:15:00-07:00"
    },
    {
        timeSlot: "03:30-04:30pm",
        timeStart: "15:30:00-07:00"
    },
    {
        timeSlot: "03:45-04:45pm",
        timeStart: "15:45:00-07:00"
    },
    {
        timeSlot: "04:00-05:00pm",
        timeStart: "16:00:00-07:00"
    },
    {
        timeSlot: "04:15-05:15pm",
        timeStart: "16:15:00-07:00"
    },
    {
        timeSlot: "04:30-05:30pm",
        timeStart: "16:30:00-07:00"
    },{
        timeSlot: "04:45-05:45pm",
        timeStart: "16:45:00-07:00"
    },
    {
        timeSlot: "05:00-06:00pm",
        timeStart: "17:00:00-07:00"
    },
    {
        timeSlot: "05:15-06:15pm",
        timeStart: "17:15:00-07:00"
    },
    {
        timeSlot: "05:30-06:30pm",
        timeStart: "17:30:00-07:00"
    },
    {
        timeSlot: "05:45-06:45pm",
        timeStart: "17:45:00-07:00"
    },
    {
        timeSlot: "06:00-07:00pm",
        timeStart: "18:00:00-07:00"
    },
    {
        timeSlot: "06:15-07:15pm",
        timeStart: "18:15:00-07:00"
    },
    {
        timeSlot: "06:30-07:30pm",
        timeStart: "18:30:00-07:00"
    },
    {
        timeSlot: "06:45-07:45pm",
        timeStart: "18:45:00-07:00"
    },
    {
        timeSlot: "07:00-08:00pm",
        timeStart: "19:00:00-07:00"
    },
    {
        timeSlot: "07:15-08:15pm",
        timeStart: "19:15:00-07:00"
    },
    {
        timeSlot: "07:30-08:30pm",
        timeStart: "19:30:00-07:00"
    },
    {
        timeSlot: "07:45-08:45pm",
        timeStart: "19:45:00-07:00"
    },
    {
        timeSlot: "08:00-09:00pm",
        timeStart: "20:00:00-07:00"
    },
    {
        timeSlot: "08:15-09:15pm",
        timeStart: "20:15:00-07:00"
    },
    {
        timeSlot: "08:30-09:30pm",
        timeStart: "20:30:00-07:00"
    },
    {
        timeSlot: "08:45-09:00pm",
        timeStart: "20:45:00-07:00"
    },
    {
        timeSlot: "09:00-10:00pm",
        timeStart: "21:00:00-07:00"
    },
    {
        timeSlot: "09:15-10:15pm",
        timeStart: "21:15:00-07:00"
    },
    {
        timeSlot: "09:30-10:30pm",
        timeStart: "21:30:00-07:00"
    },
    {
        timeSlot: "09:45-10:45pm",
        timeStart: "21:45:00-07:00"
    },
    {
        timeSlot: "10:00-11:00pm",
        timeStart: "22:00:00-07:00"
    },
    {
        timeSlot: "10:15-11:15pm",
        timeStart: "22:15:00-07:00"
    },
    {
        timeSlot: "10:30-11:30pm",
        timeStart: "22:30:00-07:00"
    },
    {
        timeSlot: "10:45-11:45pm",
        timeStart: "22:45:00-07:00"
    },
    {
        timeSlot: "11:00-12:00pm",
        timeStart: "23:00:00-07:00"
    },
    {
        timeSlot: "11:15-12:15pm",
        timeStart: "23:15:00-07:00"
    },
    {
        timeSlot: "11:30-12:30pm",
        timeStart: "23:30:00-07:00"
    },
    {
        timeSlot: "11:45-12:45pm",
        timeStart: "23:45:00-07:00"
    },
    {
        timeSlot: "12:00-01:00am",
        timeStart: "24:00:00-07:00"
    },




]
export default TIME_STARTS;