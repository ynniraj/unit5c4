// This is an event details page which has its own route
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export const Event = () => {
  const [meetups, setMeetups] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:8080/meetups/${id}`).then((res) => {
      setMeetups(res.data);
    });
  }, []);

  return (
    <div className="eventContainer">
      <div className="eventContainer">
        <div className="title">{meetups.title}</div>
        <div className="location">{meetups.location}</div>
        <div className="date">{meetups.date}</div>
        <div className="time">{meetups.time}</div>
        <div className="theme">{meetups.theme}</div>
        <div className="description">{meetups.description}</div>
        <div className="image">
          <img src={meetups.image} alt="" />
        </div>
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
      {/* add your children here (divs)
      ex : title, theme, description, date, time, location, image(optional)
      the classNames should be also : title, theme, description, date, time, location, image(optional)
      */}

      {/* only one of the buttons should be visible depending on the status of subcription
      Hint : use conditional rendering */}
    </div>
  );
};
