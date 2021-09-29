## Purpose

The purpose of this README is to explain the objective of the homework, and how it has been achieved:
A simple calendar application has been created that allows a user to save events for each hour of the day by modifying starter code. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery.

## Day Planner

As employee with a busy schedule, I want to build a day planner app that helps keep track of events throughout the day.

## Installation/Viewing the Files

Download the files contained in the McNary-Homework-5 repository, either through Github or by making a clone of the repository and downloading it locally. Once downloaded, open the file index.html to view the webpage. The published site can be found here: https://mcnaryj.github.io/McNary-Homework-5/.

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```
When the planner is opened, the current day is displayed at the top of the calendar.
When the user scrolls down, they are presented with timeblocks for standard business hours.
The timeblocks are color coded to indicate whether the event is in the present, past or the future.
When a timeblock is clicked, the user may enter an event and save it (if the timeblock is green). The file is saved in local storage if the timeblock is green, and the saved events persist.


## Mock-Up

The below animation demonstrates the appearance and functionality of the day planner (the mouse moving out of the screenshot is refreshing the page):
 ![A user clicks on slots on the color-coded calendar and edits the events.](./Assets/Images/05-third-party-apis-homework-demo.gif)

## Notes

This task seemed a bit easier to conceptualize than the previous homework, and I was able to get through it without a ton of difficulty. It was especially nice that the CSS was plug-and-play, because I don't really care for CSS at all, especially when all indications I get are that there are better ways to go about it.
A quirk I noticed is that my content only saves for future events. This makes sense because it's a day planner, but I would like to modify the code to have it save (or prompt the next business day).

## Contributing
I will be providing the url for the site via the GitHub repository, and it can also be found here: https://mcnaryj.github.io/McNary-Homework-5/ however any pull requests are welcome.

