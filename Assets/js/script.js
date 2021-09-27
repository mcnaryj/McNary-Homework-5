// Created variables (indexed at 0, one for each hour of the day) that can be stored/looped through the scheduler
var planDay = [
    {
        id: 0,
        hour: "09",
        time: "09",
        meridian: "am",
        reminder: "",
    },
    {
        id: 1,
        hour: "10",
        time: "10",
        meridian: "am",
        reminder: "",
    },
    {
        id: 2,
        hour: "11",
        time: "11",
        meridian: "am",
        reminder: "",
    },
    {
        id: 3,
        hour: "12",
        time: "12",
        meridian: "pm",
        reminder: "",
    },
    {
        id: 4,
        hour: "01",
        time: "01",
        meridian: "pm",
        reminder: "",
    },
    {
        id: 5,
        hour: "02",
        time: "02",
        meridian: "pm",
        reminder: "",
    },
    {
        id: 6,
        hour: "03",
        time: "03",
        meridian: "pm",
        reminder: "",
    },
    {
        id: 7,
        hour: "04",
        time: "04",
        meridian: "pm",
        reminder: "",
    }, {
        id: 8,
        hour: "05",
        time: "05",
        meridian: "pm",
        reminder: "",
    },
]
// Logged to the console to display the objects as a string
console.log("Plan Day" + JSON.stringify(planDay));

function currenttHeaderDate() {
    var currenttHeaderDate = moment.format('dddd, MMMM, do');
    $("#currentDay").text(currenttHeaderDate);

}