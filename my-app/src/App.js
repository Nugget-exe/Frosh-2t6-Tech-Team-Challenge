//"give an example of how to read that data in reactJS and provide a online source so i can refer to it"
// "if my json data already has AM and PM and i dont want another AM beside it, do i just have a if statement that changes what my function returns"
// "do the boxes have a fill color(i want filled boxes)"
// how to change background color of a react app
// a little short on time so i asked gpt "how do i fix this(screenshot of broken href link) using reactJS currently the way i display things is via: (code snippet)"
// ""WEDNESDAY AUGUST 28": [ { "Event Name": "FACULTY EVENTS", "Event Description": "Check out more information about Faculty Events here: <a href='https://undergrad.engineering.utoronto.ca/event/faculty-orientation-events/'>Faculty Events</a>", "Start Time": " ", "End Time": " ", "Color": "gray" }, im getting it like this(example nested json)"


import React, { useEffect, useState } from "react";
import eventData from "./data.json"; // Import the JSON file

import banner from "./img/banner.png"




function formatTime(time) {

  if (time.includes("AM") || time.includes("PM")) {
    return time;
  }

  let [hours, minutes] = time.split(":");

  hours = parseInt(hours);

  let suffix = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;

  if (hours === 0) {
    hours = 12;
  }

  return `${hours}:${minutes} ${suffix}`;
}


function formatEvent(eventText) {

  //if (typeof eventText !== "string") return eventText;

  //return /<a\s+[^>]*href=["']?[^"'>]+["']?[^>]*>/i.test(eventText);

}


const EventSchedule = () => {
  const [data, setData] = useState({});

  const containerStyle = {

    backgroundColor: '#664977',
  }

  useEffect(() => {
    // If fetching from local JSON, we can set it directly
    setData(eventData);

    // If fetching from an API, you would use fetch():
    // fetch("/path/to/events.json")
    //   .then(res => res.json())
    //   .then(json => setData(json));
  }, []);

  return (




    <div style={containerStyle}>


      <div>
        <h1>
          I made this in less than 12 hours sorry it looks mid
        </h1>
      </div>

      <div className="banner">
        <img src={banner} alt="Banner" />
      </div>

      {Object.keys(data).map((day) => (
        <div key={day}>
          <h2>{day}</h2>
          <ul>
            {data[day].map((event, index) => (
              // <li key={index} style={{ color: event.Color }}>
              //   <strong>{event["Event N  ame"]}</strong> |{" "}
              //   {event["Start Time"]} - {event["End Time"]}
              //   {event["Event Description"] && (
              //     <p>{event["Event Description"]}</p>
              //   )}
              //   {event["Event Location"] && <p>Location: {event["Event Location"]}</p>}
              // </li>
              <li
                key={index}
                style={{
                  color: "black",
                  backgroundColor: event.Color,
                  border: "1px solid black",
                  padding: "10px",
                  marginBottom: "10px",
                  borderRadius: "8px",
                  listStyleType: "none"
                }}
              >
                <strong>{event["Event Name"]}</strong> |{" "}
                {formatTime(event["Start Time"])} - {formatTime(event["End Time"])}
                {/*&& (<p>{event["Event Description"]}</p> bottom*/}
                {event["Event Description"] && (
                  <p
                    dangerouslySetInnerHTML={{ __html: event["Event Description"] }}// i was todays years old when i found out this was a legit react thing
                  />
                )}


                {event["Event Location"] && (
                  <p>Location: {event["Event Location"]}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default EventSchedule;