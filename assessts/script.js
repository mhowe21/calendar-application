window.onload = function () {
    let today = moment().format("MMMM Do YYYY");
    console.log(today)

    $("#currentDay").text(today)
    // let start = moment().startOf("day")
    // console.log(start.format("H"))
    containerDraw()
}

function containerDraw() {

    for (let i = 0; i < 24; i++) {
        let current = moment().format("H")
        console.log(current)

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
    saveEventListiners()

}


function saveEventListiners(){
    $(".save-items").on("click", function(){
        console.log("you hit save on " + String(this))
        alert("Calendar Saved!")

    });
}