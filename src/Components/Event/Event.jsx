// This is an event details page which has its own route
import axios from "axios";
import { useEffect, useState } from "react";
export const Event = () => {
  const [meetups, setMeetups] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/meetups").then((response) => {
      setMeetups(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="eventContainer">
      {
        // Filter on the basis of Users interests and location (both true)
        meetups.map((el) => {
          return (
            <div className="event">
              <div className="eventImage">
                <img src={el.image} alt="eventImage" />
              </div>
              <div className="eventDetails">
                <h1 className="title">{el.title}</h1>
                <p className="description">{el.description}</p>
                <p className="location">{el.location}</p>
                <p className="date">{el.date}</p>
                <p className="time">{el.time}</p>
              </div>
            </div>
          );
        })
      }
      {/* add your children here (divs)
      ex : title, theme, description, date, time, location, image(optional)
      the classNames should be also : title, theme, description, date, time, location, image(optional)
      */}

      {/* only one of the buttons should be visible depending on the status of subcription
      Hint : use conditional rendering */}
      <button className="unsubscribe">Unsubscribe</button>
      <button className="subscribe" onClick={() => {}}>
        Subscribe
      </button>
    </div>
  );
};
