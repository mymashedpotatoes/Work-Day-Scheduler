$(function () {
//on save btn click save hour and msg to localstorage
 $('.saveBtn').on('click', function(event) {
  event.preventDefault();
  var time = $(this).parent().attr('id').split("-")[1];
  var msg = $(this).siblings('.description').val();
  console.log(time);
  console.log(msg);
  localStorage.setItem(time, msg);
  $("#localAddedMsg").fadeIn(500); //message displays when item is saved to local stoage
  setTimeout(function() {
    $('#localAddedMsg').fadeOut(500); //fades in and out after button click
  }, 3000);
 })

  hour = dayjs().hour(); //current hr in 24-hr format
  console.log(hour);

  $('.time').each(function () { //iterate over each element with time class
    var timeClass = $(this).attr("id").split("-")[1]; //split id of block into array and take second part... time-12 to ["time" - "12"] then to 12
    if (hour == timeClass) { //if current hour equals hour on block then present class
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else if (hour < timeClass) { //if current hour less than hour block then future
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    } else {
      $(this).removeClass("future"); //if current hour greater than hour block then past
      $(this).removeClass("present");
      $(this).addClass("past");
    }
  });
  
  //anything that was saved to local will get pulled with these
 $("#hour-8 .description").val(localStorage.getItem("8")); //target id for block then specific description, grab hour and msg from local
 $("#hour-9 .description").val(localStorage.getItem("9"));
 $("#hour-10 .description").val(localStorage.getItem("10"));
 $("#hour-11 .description").val(localStorage.getItem("11"));
 $("#hour-12 .description").val(localStorage.getItem("12"));
 $("#hour-13 .description").val(localStorage.getItem("13"));
 $("#hour-14 .description").val(localStorage.getItem("14"));
 $("#hour-15 .description").val(localStorage.getItem("15"));
 $("#hour-16 .description").val(localStorage.getItem("16"));
 $("#hour-17 .description").val(localStorage.getItem("17"));

  //displays current day on header
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D')); //advanced format for Do (-st -nd -th...)
  console.log(today);
});
