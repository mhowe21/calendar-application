window.onload = function () {
    let today = moment().format("MMMM Do YYYY");
    console.log(today)

    $("#currentDay").text(today)
    containerDraw()
}

function containerDraw() {
    let row = $('<div class="row wee"></div>')
    $("#calendar-container").append(row)
}