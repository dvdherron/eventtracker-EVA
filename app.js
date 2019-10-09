
var events = null;
var city = "Stockholm";
// Make a droplist for cities?
fetch ("https://www.eventbriteapi.com/v3/events/search/?sort_by=distance&location.address=" + city + "&categories=103&token=33DPELM3CGFY27D5P3JG")
.then (function(response){
    return response.json()
})
.then (function(response){
    console.log(response.events);
    response.events.forEach(function(event) {
        html = `
        <li class="band-item">
            <a href="${event.url}">${event.name.text}</a><br>
            <p>time + date<p>
        </li>`;
        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + html;
    })
    events = response.events;
})

console.log(events)
