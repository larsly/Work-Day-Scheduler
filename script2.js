// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
  
    function saveEvent(input) {
      localStorage.setItem('scores', JSON.stringify(input));
  }
  
    var input = document.getElementById("hour-");
  
    input.addEventListener("click", saveEvent);
  
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
  
    // assign all classes to future 
    // if the time is less than the current hour, add the past class
    // if the time is equal to the current hour, add the present class
    // if the time is greater than the current hour do nothing
  
  //   function colorCode() {
  //     const color = document.getElementById("hour-"); 
  //     if () {
  //     color.classList.remove("future"); // Remove mystyle class from DIV
  //     color.classList.add("past"); // Add newone class to DIV
  //   }
  //   else if () {
  //     color.classList.remove("future");
  //     color.classList.add("present");
  //   }
  //   else {
  //     color.classList.contains("future");
  //   }
  // };
  
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  
    var displayTimer = document.getElementById("currentDay");
  
    function currentTime() {
        var currentTime = dayjs().format('ddd MMMM D');
        displayTimer.text(currentTime);
    }
    
    currentTime();
    setInterval(currentTime, 1000);
  
  });