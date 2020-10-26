var currentHour = Date.now().getHours();

$(document).ready(function () {
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
});

$("#time-block").each(function () {
  var val = parseInt($(this).prop("data-hour"));
  if (val > currentHour && val < currentHour + 6) {
    $(this).css("background-color", "Blue");
  } else if (val < currentHour && val > currentHour - 6) {
    $(this).css("background-color", "Red");
  } else if (val === currentHour) {
    $(this).css("background-color", "Green");
  } else {
    $(this).css("background-color", "White");
  }
});
