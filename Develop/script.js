window.onload = function () {
    var today = moment().format("MMMM Do YYYY");
    console.log(today)

    $("#currentDay").text(today)
}