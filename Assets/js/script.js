// Created variables (indexed at 0, one for each hour of the day) that can be stored/looped through the scheduler
// notes field to contain text input
var planDay = [
    {
        id: 0,
        hour: "9",
        time: "9",
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
        hour: "1",
        time: "1",
        meridian: "pm",
        notes: "",
    },
    {
        id: 5,
        hour: "2",
        time: "2",
        meridian: "pm",
        notes: "",
    },
    {
        id: 6,
        hour: "3",
        time: "3",
        meridian: "pm",
        notes: "",
    },
    {
        id: 7,
        hour: "4",
        time: "4",
        meridian: "pm",
        notes: "",
    }, {
        id: 8,
        hour: "5",
        time: "5",
        meridian: "pm",
        notes: "",
    },
]
// Logged to the console to display the array as a JSON string
console.log("Day planner: " + JSON.stringify(planDay));

// Created function to save these values in local storage
function savePlans() {
    localStorage.setItem("planDay", JSON.stringify(planDay))
}
// Added a console log to get the stored items, at the present it reads null 
console.log("Planned Day: " + JSON.parse(localStorage.getItem("Planned Day")));

// Function to display today's date in the header 
function currentDate() {
    var currentDate = moment().format('dddd, MMMM, Do');
    $("#currentDay").text(currentDate);
}

// Creating a for loop that checks for content entered for the hours specified in the array
function showPlans() {
    console.log("something doing?");
    planDay.forEach(function (currentHour) {
        $(`#${currentHour.id}`).val(currentHour.notes);
    })

}


function getStorage() {
    var plannedDay = JSON.parse(localStorage.getItem("Planned Day"));

    if (plannedDay) {
        planDay = plannedDay
    }

    savePlans;
    showPlans();
}

// Calling the function to display it on the screen
currentDate();

var userInput = $("<textarea>");

planDay.forEach(function (currentHour) {
    var hourRow = $("<form>").attr({
        "class": "row"
    });

    var hourColumn = $("<div>")
        .text(`${currentHour.hour}${currentHour.meridian}`).attr({
            "class": "col-md-2 hour"
        })
    $(".container").append(hourColumn);
    var hourPlan = $("<div>")
        .attr({
            "class": "col-md-9 description p-0"

        });
    hourPlan.append(userInput);
    hourPlan.attr("id", currentHour.id);
    var userInput = $("<div>")
        .attr({
            "class": "col-md-9 description p-0"
        });

    if (currentHour.time < moment().format("HH")) {
        userInput.attr({
            // linking each of the next three class to those provided in the css
            "class": ".past"

        })
    }
    else if (currentHour.time === moment().format("HH")) {
        userInput.attr({
            "class": ".present"
        })
    }
    else if (currentHour.time > moment().format("HH")) {
        userInput.attr({
            "class": ".future"
        })
    }
})
