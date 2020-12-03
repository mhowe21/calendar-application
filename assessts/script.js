let today = moment().format("MMMM Do YYYY");
console.log(today)

window.onload = function () {

    let storage = localStorage.getItem(today)
    $("#currentDay").text(today)
    // let start = moment().startOf("day")
    // console.log(start.format("H"))

    containerDraw()

    if (storage != null) {
        retriveSavedCalendar(storage)
    }

}

function containerDraw() {
    let current = moment().format("H")
    console.log(current)
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

    saveEvents()

}

function saveEvents() {
    let valueStores = []

    $(".save-items").on("click", function () {
        console.log("you hit save on " + String(this))
        //alert("Calendar Saved!")
        //store any saved items.


        let calArray = document.querySelectorAll(".text-entry")

        for (const elm of calArray) {
            valueStores.push(elm.value)
        }

        let string = JSON.stringify(valueStores)
        //string = string.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g)

        console.log(string)
        // local storage only takes string so we are going to have to split it back out into an array
        localStorage.setItem(today, string)


    });
}

function retriveSavedCalendar(storage) {
    let textArray = document.querySelectorAll(".text-entry")
    //let storageArray = storage.split(",")
    storageArray = JSON.parse(storage)

    console.log(storageArray)


    for (let i = 0; i < textArray.length; i++) {
        
            
            textArray[i].value = storageArray[i]

        
    }


}