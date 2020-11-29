window.onload = function () {
    let today = moment().format("MMMM Do YYYY");
    console.log(today)

    $("#currentDay").text(today)
    containerDraw()
}

function containerDraw() {

    for (let i = 0; i < 23; i++) {
        let row = $('<div class="row"></div>')
        $("#calendar-container").append(row)

        let timeBox = $(row).append('<div class="col-1 time-box"></div>')
        let eventBox = $('<div class="col-10 future-times"></div>')
        $(row).append(eventBox)
        let eventBoxInput = $('<input type="text" id="fname" class="text-entry" name="fname">') 
        $(eventBox).append(eventBoxInput)       
        let saveBox = $(row).append('<div class="col-1 save-items"></div>')


    }



}