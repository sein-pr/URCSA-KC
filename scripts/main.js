document.addEventListener("DOMContentLoaded", function() {
  const currentPage = window.location.pathname;
  const navLinks = document.querySelectorAll('.navbar a');

  navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
          navLinks.forEach(link => link.classList.remove('active-tab'));
          link.classList.add('active-tab');
      }
  });
});

document.getElementById('showTableBtn').addEventListener('click', function() {
  var table = document.getElementById('scheduleTable');
  if (table.style.display === 'none') {
    table.style.display = 'table';
    this.textContent = 'Hide Prayer Meeting Schedule';
  } else {
    table.style.display = 'none';
    this.textContent = 'Show Prayer Meeting Schedule';
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const playPauseButton = document.querySelector(".play-pause-btn");
  const audioPlayer = document.querySelector(".audio-player audio");
  const audioTimeline = document.querySelector(".audio-timeline");

  // Play/pause functionality
  playPauseButton.addEventListener("click", function () {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playPauseButton.classList.replace("uil-volume", "uil-pause");
    } else {
      audioPlayer.pause();
      playPauseButton.classList.replace("uil-pause", "uil-volume");
    }
  });

  // Update the timeline as the audio plays
  audioPlayer.addEventListener("timeupdate", function () {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    audioTimeline.value = progress;
  });

  // Seek the audio when the timeline is adjusted
  audioTimeline.addEventListener("input", function () {
    const newTime = (audioTimeline.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = newTime;
  });

  // Reset the audio and icon when the audio finishes
  audioPlayer.addEventListener("ended", function () {
    playPauseButton.classList.replace("uil-pause", "uil-volume");
    audioTimeline.value = 0;
  });
});




const scheduleModal = document.querySelector(".schedule-modal");
const scheduleBtns = document.querySelectorAll(".schedule-btn"); 

// Open modal when any schedule button is clicked
scheduleBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        scheduleModal.classList.add("active");
    });
});

// Close the modal when clicking outside the schedule content
scheduleModal.addEventListener("click", (event) => {
    // Close if clicking on the modal background
    if (event.target === scheduleModal) {
        scheduleModal.classList.remove("active");
    }
});;


document.addEventListener("DOMContentLoaded", function () {
  initCalendar(); // Initialize the calendar on page load
});



const calendar = document.querySelector(".calendar"),
  date = document.querySelector(".date"),
  daysContainer = document.querySelector(".days"),
  prev = document.querySelector(".prev"),
  next = document.querySelector(".next"),
  todayBtn = document.querySelector(".toda"),
  gotoBtn = document.querySelector(".goto button"),
  dateInput = document.querySelector(".date-input"),
  eventDay = document.querySelector(".event-day"),
  eventDate = document.querySelector(".event-date"),
  eventsContainer = document.querySelector(".events"),
  addEventBtn = document.querySelector(".add-event"),
  addEventWrapper = document.querySelector(".add-event-wrapper"),
  addEventCloseBtn = document.querySelector(".close"),
  addEventTitle = document.querySelector(".event-name"),
  addEventFrom = document.querySelector(".event-time-from"),
  addEventTo = document.querySelector(".event-time-to"),
  addEventSubmit = document.querySelector(".add-event-btn");

let today = new Date();
let activeDay;
let month = today.getMonth();
let year = today.getFullYear();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const eventsArr = [
  {
    day: 13,
    month: 10, // October
    year: 2024,
    events: [
      { title: "Church day", time: "10:00 AM" },
      { title: "Lunch with family", time: "1:00 PM" },
    ],
  },
  {
    day: 6,
    month: 10,
    year: 2024,
    events: [{ title: "Sunday worship", time: "9:00 AM" }],
  },
];

// Function to initialize the calendar
function initCalendar() {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const prevLastDay = new Date(year, month, 0);
  const prevDays = prevLastDay.getDate();
  const lastDate = lastDay.getDate();
  const day = firstDay.getDay();
  const nextDays = 7 - lastDay.getDay() - 1;

  date.innerHTML = months[month] + " " + year;

  let days = "";

  // Adding previous month's days
  for (let x = day; x > 0; x--) {
    days += `<div class="day prev-date">${prevDays - x + 1}</div>`;
  }

  // Adding current month's days
  for (let i = 1; i <= lastDate; i++) {
    let event = false;
    eventsArr.forEach((eventObj) => {
      if (
        eventObj.day === i &&
        eventObj.month === month + 1 &&
        eventObj.year === year
      ) {
        event = true;
      }
    });

    if (
      i === new Date().getDate() &&
      year === new Date().getFullYear() &&
      month === new Date().getMonth()
    ) {
      activeDay = i;
      getActiveDay(i);
      updateEvents(i);
      days += event
        ? `<div class="day today active event">${i}</div>`
        : `<div class="day today active">${i}</div>`;
    } else {
      days += event
        ? `<div class="day event">${i}</div>`
        : `<div class="day">${i}</div>`;
    }
  }

  // Adding next month's days
  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="day next-date">${j}</div>`;
  }

  // Injecting the days into the calendar
  daysContainer.innerHTML = days;

  // Add event listeners for the new days
  addDayClickListener();
}

// Function to add click listeners to each day
function addDayClickListener() {
    const days = document.querySelectorAll(".day");
    days.forEach((day) => {
      day.addEventListener("click", (e) => {
        const selectedDay = parseInt(e.target.innerHTML);
        activeDay = selectedDay;
  
        // Remove 'active' class from all days and add to the clicked one
        days.forEach((d) => d.classList.remove("active"));
        e.target.classList.add("active");
  
        // Update event list based on the selected day
        updateEvents(selectedDay);
      });
    });
  }
  
// Function to update the event list for the selected day
function updateEvents(day) {
    let events = "";
    let eventObj = eventsArr.find((event) => event.day === day && event.month === month + 1 && event.year === year);
  
    if (eventObj) {
      eventObj.events.forEach((event) => {
        events += `
          <div class="title">
            <i class="uil uil-circle"></i>
            <h3 class="event-title">${event.title}</h3>
          </div>
          <div class="event-time">
            <span class="event-time">${event.time}</span>
          </div>
        `;
      });
    } else {
      events = "<p>No events for this day</p>";
    }
  
    eventsContainer.innerHTML = events;
  
    // Update the event-day and event-date
    eventDay.innerHTML = new Date(year, month, day).toLocaleDateString("en", { weekday: "long" });
    eventDate.innerHTML = `${day}${getOrdinal(day)} ${months[month]} ${year}`;
  }
  

  // Helper function to get ordinal suffix (e.g., 1st, 2nd, 3rd, 4th...)
function getOrdinal(day) {
    if (day > 3 && day < 21) return "th"; // Catch all 11th, 12th, 13th...
    switch (day % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  }
  
// Function to handle going to the previous month
function prevMonth() {
  month--;
  if (month < 0) {
    month = 11;
    year--;
  }
  initCalendar();
}

// Function to handle going to the next month
function nextMonth() {
  month++;
  if (month > 11) {
    month = 0;
    year++;
  }
  initCalendar();
}

// Event listener for previous and next buttons
prev.addEventListener("click", prevMonth);
next.addEventListener("click", nextMonth);

// Function to update events for a selected day
function updateEvents(day) {
  // Your event updating logic here
}

// Initialize the calendar on page load
document.addEventListener("DOMContentLoaded", initCalendar);

//function to add active on day
function addListner() {
  const days = document.querySelectorAll(".day");
  days.forEach((day) => {
    day.addEventListener("click", (e) => {
      getActiveDay(e.target.innerHTML);
      updateEvents(Number(e.target.innerHTML));
      activeDay = Number(e.target.innerHTML);
      //remove active
      days.forEach((day) => {
        day.classList.remove("active");
      });
      //if clicked prev-date or next-date switch to that month
      if (e.target.classList.contains("prev-date")) {
        prevMonth();
        //add active to clicked day afte month is change
        setTimeout(() => {
          //add active where no prev-date or next-date
          const days = document.querySelectorAll(".day");
          days.forEach((day) => {
            if (
              !day.classList.contains("prev-date") &&
              day.innerHTML === e.target.innerHTML
            ) {
              day.classList.add("active");
            }
          });
        }, 100);
      } else if (e.target.classList.contains("next-date")) {
        nextMonth();
        //add active to clicked day afte month is changed
        setTimeout(() => {
          const days = document.querySelectorAll(".day");
          days.forEach((day) => {
            if (
              !day.classList.contains("next-date") &&
              day.innerHTML === e.target.innerHTML
            ) {
              day.classList.add("active");
            }
          });
        }, 100);
      } else {
        e.target.classList.add("active");
      }
    });
  });
}

todayBtn.addEventListener("click", () => {
  today = new Date();
  month = today.getMonth();
  year = today.getFullYear();
  initCalendar();
});

dateInput.addEventListener("input", (e) => {
  dateInput.value = dateInput.value.replace(/[^0-9/]/g, "");
  if (dateInput.value.length === 2) {
    dateInput.value += "/";
  }
  if (dateInput.value.length > 7) {
    dateInput.value = dateInput.value.slice(0, 7);
  }
  if (e.inputType === "deleteContentBackward") {
    if (dateInput.value.length === 3) {
      dateInput.value = dateInput.value.slice(0, 2);
    }
  }
});

gotoBtn.addEventListener("click", gotoDate);

function gotoDate() {
  console.log("here");
  const dateArr = dateInput.value.split("/");
  if (dateArr.length === 2) {
    if (dateArr[0] > 0 && dateArr[0] < 13 && dateArr[1].length === 4) {
      month = dateArr[0] - 1;
      year = dateArr[1];
      initCalendar();
      return;
    }
  }
  alert("Invalid Date");
}

//function get active day day name and date and update eventday eventdate
function getActiveDay(date) {
  const day = new Date(year, month, date);
  const dayName = day.toString().split(" ")[0];
  eventDay.innerHTML = dayName;
  eventDate.innerHTML = date + " " + months[month] + " " + year;
}

function convertTime(time) {
  //convert time to 24 hour format
  let timeArr = time.split(":");
  let timeHour = timeArr[0];
  let timeMin = timeArr[1];
  let timeFormat = timeHour >= 12 ? "PM" : "AM";
  timeHour = timeHour % 12 || 12;
  time = timeHour + ":" + timeMin + " " + timeFormat;
  return time;
}
