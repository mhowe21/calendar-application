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

        $(row).append('<div class="col-1"></div>')
        $(row).append('<div class="col-10"></div>')
        $(row).append('<div> class="col-1"></div>')
    }



}