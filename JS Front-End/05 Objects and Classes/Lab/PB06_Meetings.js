function meetingManager(arr) {
    const meetingCalendar = {};
    for (const element of arr) {
        const day = element.split(" ")[0];
        const name = element.split(" ")[1];
        let printMessage = "";
        if (!meetingCalendar.hasOwnProperty(day)) {
            printMessage = `Scheduled for ${day}`;
            meetingCalendar[day] = name;
        } else {
            printMessage = `Conflict on ${day}!`;
        }
        console.log(printMessage);
    }

for (const key in meetingCalendar) {
    console.log(`${key} -> ${meetingCalendar[key]}`)
}
}

meetingManager(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);