// Created variables (indexed at 0, one for each hour of the day) that can be stored/looped through the scheduler
// notes field to contain text input
var planDay = [
    {
        id: 0,
        hour: "09",
        time: "09",
        meridian: "am",
        notes: "",
    },
    {
        id: 1,
        hour: "10",
        time: "10",
        meridian: "am",
        notes: "",
    },
    {
        id: 2,
        hour: "11",
        time: "11",
        meridian: "am",
        notes: "",
    },
    {
        id: 3,
        hour: "12",
        time: "12",
        meridian: "pm",
        notes: "",
    },
    {
        id: 4,
        hour: "01",
        time: "01",
        meridian: "pm",
        notes: "",
    },
    {
        id: 5,
        hour: "02",
        time: "02",
        meridian: "pm",
        notes: "",
    },
    {
        id: 6,
        hour: "03",
        time: "03",
        meridian: "pm",
        notes: "",
    },
    {
        id: 7,
        hour: "04",
        time: "04",
        meridian: "pm",
        notes: "",
    }, {
        id: 8,
        hour: "05",
        time: "05",
        meridian: "pm",
        notes: "",
    },
]
// Logged to the console to display the array as a JSON string
console.log("Day planner: " + JSON.stringify(planDay));

// Created function to save these values in the local storage
function savePlans() {
    localStorage.setItem("planDay", JSON.stringify(planDay))
}
// Added a console log to get the stored items, at the present it reads null 
console.log("Planned Day: " + JSON.parse(localStorage.getItem("Planned Day")));

// Creating a for loop that checks for content entered for the hours specified in the array
function showPlans() {
    console.log("something doing?");
    planDay.forEach(function (currentHour) {
        $(`#${currentHour.id}`).val(currentHour.notes);
    })

}


// 
function currentDate() {
    var currentDate = moment().format('dddd, MMMM, Do');
    $("#currentDay").text(currentDate);
}

function getStorage() {
    var plannedDay = JSON.parse(localStorage.getItem("Planned Day"));

    if (plannedDay) {
        planDay = plannedDay
    }
    savePlans;
    showPlans();
}
// Calling the function
currentDate();

