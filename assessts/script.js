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

        // make elements
        let row = $('<div class="row"></div>')
        $("#calendar-container").append(row)

        let timeBox = $(`<div class="col-1 time-box ${i}-hour"></div>`)
        let timeBoxLabel = $(`<p>${i}:00</p>`)
        timeBox.append(timeBoxLabel)
        row.append(timeBox)
        let eventBox = $('<div class="col-10 future-times"></div>')
        $(row).append(eventBox)
        let eventBoxInput = $('<input type="text" id="text" class="text-entry" name="text">') 
        $(eventBox).append(eventBoxInput)       
        let saveBox = $(row).append('<div class="col-1 save-items"></div>')

        // if past the current hour mark it 
        

    }



}