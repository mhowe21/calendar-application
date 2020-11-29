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
        let eventBox = $(row).append('<div class="col-10 future-times"></div>')
        //let eventBoxInput = $(eventBox).append('<input type="text class="inputtext">')
        let saveBox = $(row).append('<div class="col-1 save-items"></div>')
    }



}