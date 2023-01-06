// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// let btn = document.querySelectorAll(".saveBtn");


$(function () {

  let currentHour = dayjs().format("H");
  let currentHourId = "hour-" + currentHour;
  console.log(currentHourId)
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  $(".saveBtn").click(function getId(e){
    
    let $id = e.target.parentNode.id;
    console.log($id);
    let note = $(e.target).siblings("textarea").val();
    localStorage.setItem($id, note);
  })

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  

  
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  // Save button code

  for (let i=9; i <=17; i++){
    let key = "hour-" + i;
    let todoText = localStorage.getItem(key);
    $("#" + key).children("textarea").text(todoText);
    console.log(key)
  }



  //
  // TODO: Add code to display the current date in the header of the page.
  // display for time on top of page
  let now = dayjs().format("dddd, MMMM D");
  console.log(now);
  $( "#currentDay" ).text(now);





});