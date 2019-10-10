var numToString = function (num) {
<<<<<<< HEAD
  if (num < 10) {
      return "0" + num;
  } else {
      return num;
  }
};

var yearChange = function (year) {
  if (year === 119) {
      return 2019;
  } else if (year === 120) {
      return 2020;
  }
=======
    if (num < 10) {
        return "0" + num;
    } else {
        return num;
    }
};

var yearChange = function (year) {
    if (year === 119) {
        return 2019;
    } else if (year === 120) {
        return 2020;
    }
>>>>>>> 27c64e87d7ccdf825693b022476a7048a0c29b0d
};

var city = '';
var input = document.getElementById("nameCity");


input.addEventListener("keyup", function (event) {
<<<<<<< HEAD
  // Number 13 is the "Enter"
  if (event.keyCode === 13) {
      city = document.getElementById("nameCity").value;
      document.getElementById("band-section").innerHTML = null;
      fetch("https://www.eventbriteapi.com/v3/events/search/?sort_by=date&location.address=" + city + "&categories=103&token=33DPELM3CGFY27D5P3JG")
          .then(function (response) {
              return response.json()
          })
          .then(function (response) {
              response.events.forEach(function (event) {
                  var date = new Date(event.start.local);

                  var year = date.getYear();
                  var month = date.getMonth();
                  var day = date.getDate();
                  var hour = date.getHours();
                  var minutes = date.getMinutes();

                  var timeString = numToString(day) + '-' + numToString(month) + '-' +
                      yearChange(year) + ' ' + numToString(hour) + ":" + numToString(minutes);
                  html = `
                  <ul class="band-list">
                  <li class="band-item"><a href="${event.url}" target="_blank">${event.name.text}</a><br>
                  <p>${timeString}</p><br></li>
                  </ul>
          `
                  document.getElementById("band-section").innerHTML += html;

              })
              events = response.events;
          })

  }
=======
    // Number 13 is the "Enter"
    if (event.keyCode === 13) {
        city = document.getElementById("nameCity").value;
        document.getElementById("band-section").innerHTML = null;
        fetch("https://www.eventbriteapi.com/v3/events/search/?sort_by=date&location.address=" + city + "&categories=103&token=33DPELM3CGFY27D5P3JG")
            .then(function (response) {
                return response.json()
            })
            .then(function (response) {
                console.log(response.events);
                response.events.forEach(function (event) {
                    var date = new Date(event.start.local);

                    var year = date.getYear();
                    var month = date.getMonth();
                    var day = date.getDate();
                    var hour = date.getHours();
                    var minutes = date.getMinutes();

                    var timeString = numToString(day) + '-' + numToString(month) + '-' +
                        yearChange(year) + ' ' + numToString(hour) + ":" + numToString(minutes);
                    html = `
                    <ul class="band-list">
                    <li class="band-item"><a href="${event.url}" target="_blank">${event.name.text}</a><br>
                    <p>${timeString}</p><br></li>
                    </ul>
            `
                    document.getElementById("band-section").innerHTML += html;

                })
                events = response.events;
            })

    }
>>>>>>> 27c64e87d7ccdf825693b022476a7048a0c29b0d
});
