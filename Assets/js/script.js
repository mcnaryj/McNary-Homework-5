// Created variables (indexed at 0, one for each hour of the day) that can be stored/looped through the scheduler
// notes field to contain text input
// hours adjusted to accomodate the moment requirements ("HH")
var planDay = [
    {
        id: 0,
        hour: "09",
        time: "09",
        meridian: "am",
        notes: ""
        // initially had a comma after all the notes, found you can leave the last one empty in the array
    },
    {
        id: 1,
        hour: "10",
        time: "10",
        meridian: "am",
        notes: ""
    },
    {
        id: 2,
        hour: "11",
        time: "11",
        meridian: "am",
        notes: ""
    },
    {
        id: 3,
        hour: "12",
        time: "12",
        meridian: "pm",
        notes: ""
    },
    {
        id: 4,
        hour: "01",
        time: "13",
        meridian: "pm",
        notes: ""
    },
    {
        id: 5,
        hour: "02",
        time: "14",
        meridian: "pm",
        notes: ""
    },
    {
        id: 6,
        hour: "03",
        time: "15",
        meridian: "pm",
        notes: ""
    },
    {
        id: 7,
        hour: "04",
        time: "16",
        meridian: "pm",
        notes: ""
    },
    {
        id: 8,
        hour: "05",
        time: "16",
        meridian: "pm",
        notes: ""
    },
]
// Logged to the console to display the array as a JSON string
console.log("Day planner: " + JSON.stringify(planDay));




// Function to display today's date in the header 
function currentDate() {
    var currentDate = moment().format('dddd, MMMM, Do');
    // using the id from the html doc
    $("#currentDay").text(currentDate);
}

// Calling the function to display it on the screen
currentDate();


// Creating a for loop that checks for content entered for the hours specified in the array
function showPlans() {
    planDay.forEach(function (currentHour) {
        $(`#${currentHour.id}`).val(currentHour.notes);
    })

}

// Created function to save these values in local storage
function savePlans() {
    localStorage.setItem("planDay", JSON.stringify(planDay));
}

// created a function get the items logged in the planned day
function getStorage() {
    var plannedDay = JSON.parse(localStorage.getItem("Planned Day"));

    if (plannedDay) {
        planDay = plannedDay;
    }

    savePlans();
    showPlans();

}

// Created a for loop to display the hour, plans and the button to save them
// using .attr to change each class to match up with the stylesheet/bootstrap stylesheet
planDay.forEach(function (currentHour) {
    var hourRow = $("<div>").attr({
        "class": "row"
    });

    $(".container").append(hourRow);
    // ^ creating time blocks
    var hours = $("<div>")
        .text(`${currentHour.hour}${currentHour.meridian}`)
        .attr({
            // setting class according to the hour class as provided in the style sheet. setting the column to take up 
            "class": "col-md-2 hour"
        });

    var hourPlan = $("<div>")
        .attr({
            "class": "col-md-9 description p-0"
        });

    // added a variable for the text area
    var userData = $("<textarea>");

    hourPlan.append(userData);

    userData.attr("id", currentHour.id);

    // if/else statements to accomodate for the time of day
    if (currentHour.time === moment().format("HH")) {
        userData.attr({
            // linking each of the next three classes to those provided in the css
            "class": "present"

        })
    }
    else if (currentHour.time > moment().format("HH")) {
        userData.attr({
            "class": "future"
        })
    }
    // Noted that if the time in the array is single digits, the page will interpret that 
    else if (currentHour.time < moment().format("HH")) {
        userData.attr({
            "class": "past"
        })
    }

    var saveBtn = $("<saveBtn>")
        .attr({
            // Found save icon on fontawesome.com, had fas first, changed to far. Added fa-lg because the icon was tiny at first.
            "class": "<i class= far fa-save fa-lg>"

        });
    var savePlanner = $("<button>")
        .attr({
            "class": "col-md-1 saveBtn"

        });
    savePlanner.append(saveBtn);
    hourRow.append(hours, hourPlan, savePlanner);
})
getStorage();

$(".saveBtn").on('click', function (e) {
    e.preventDefault();
    // using $(this) to return a jQuery object that wraps the element
    var saveNotes = $(this).siblings(".container").children(".present").attr("id");
    planDay[saveNotes].notes = $(this).siblings(".description").children(".present").val();
    savePlans;
    showPlans();
})

// Added a console log to get the stored items, at the present it reads null 

