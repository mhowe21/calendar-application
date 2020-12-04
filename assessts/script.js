let today = moment().format("M/DD/YYYY");


window.onload = function () {

    //let storage = localStorage.getItem(today)
    $("#currentDay").text(`Today is: ${moment().format("MMMM Do YYYY")}`)

    console.log(today)
    containerDraw(today)


    retriveSavedCalendar(today)

    $("#datepicker").datepicker();

    $("#datepicker").on("change", function () {
        let Date = $("#datepicker").datepicker("getDate");
        //console.log(Date)
        today = moment(Date).format("M/DD/YYYY")
        console.log(today)
        selectDate(today)

    })
}

function containerDraw(day) {

    if (day === moment().format("M/DD/YYYY")) {
        current = moment().format("H")
    } else {
        current = 0
    }


    for (let i = 0; i < 24; i++) {


        // make elements
        let row = $('<div class="row"></div>')
        $("#calendar-container").append(row)

        let timeBox = $(`<div class="col-1 time-box ${i}-hour"></div>`)
        let timeBoxLabel = $(`<p>${i}:00</p>`)
        timeBox.append(timeBoxLabel)
        row.append(timeBox)
        let eventBox = $('<div class="col-10"></div>')
        $(row).append(eventBox)
        let eventBoxInput = $('<input type="text" class="text-entry" name="text">')
        $(eventBox).append(eventBoxInput)
        let saveBox = $(row).append(`<div class="col-1 save-items" id="save-icon-${i}"></div>`)


        // color code hours
        if (current > i) {
            //$(eventBox).addClass("future-times")
            $(eventBox).addClass("prior-hour")
        } else if (current == i) {
            $(eventBox).addClass("current-hour")
        } else {
            $(eventBox).addClass("future-times")
        }
    }
    saveEvents(day)

}

function saveEvents(day) {
    
    $(".save-items").on("click", function () {
        let valueStores = []
        let calArray = document.querySelectorAll(".text-entry")

        for (const elm of calArray) {
            valueStores.push(elm.value)
        }

        let string = JSON.stringify(valueStores)

        localStorage.setItem(day, string)

        alert("Calendar Saved")
    });
}

function retriveSavedCalendar(day) {
    let textArray = document.querySelectorAll(".text-entry")
    // get storage
    let storage = localStorage.getItem(day)

    // parse back out json array. 
    storageArray = JSON.parse(storage)

    console.log(storageArray)

    if (storage != null) {
        for (let i = 0; i < textArray.length; i++) {
            textArray[i].value = storageArray[i]
        }
    }

}

function selectDate(day) {
    $("#calendar-container").empty()
    containerDraw(day)
    retriveSavedCalendar(day)
}