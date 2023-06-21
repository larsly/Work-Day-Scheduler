$(function () {
  var displayTimer = document.getElementById("currentDay");
  var hoursEl= document.getElementById("hours");
  var btnEls = document.getElementsByClassName("saveBtn");
  var textEls = document.getElementsByClassName("description");

  // looping through the divs that act as time blocks using the parent id and subtracting by 9 to account for the index in the array 
  // in order to assign the proper class depending on the time of day
  function colors() {
    var currentHour = (dayjs().hour() - 9);
    for (var i = 0; i < hoursEl.children.length; i++) {
      hoursEl.children[i].classList.remove("present", "future", "past");
      if (currentHour === i) {
        hoursEl.children[i].classList.add("present");
      } else if (currentHour < i) {
        hoursEl.children[i].classList.add("future");
      } else {
        hoursEl.children[i].classList.add("past");
      }
    }
  };

  // updating the day displayed at the top of the page
  function updateCurrentTime() {
    var currentTime = dayjs().format('dddd MMMM D');
    displayTimer.innerText = currentTime;
    colors();
  }

  //populating the local storage
  for (var i = 0; i < btnEls.length; i++) {
    textEls[i].innerText = JSON.parse(localStorage.getItem(btnEls[i].parentElement.id));
    btnEls[i].addEventListener("click", function () {
      var inputText = $(this).siblings(".description").val();
      localStorage.setItem(this.parentElement.id, JSON.stringify(inputText));
    });
  }


  updateCurrentTime();
  setInterval(updateCurrentTime, 1000);


});