import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
export const Home = () => {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/meetups").then((response) => {
      setMeetups(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="homeContainer">
      {meetups.filter((el) => {})}
      {
        // Filter on the basis of Users interests and location (both true)
        meetups.map((el) => {
          return (
            <Link to={`events/${el.id}`} className="events">
              <div className="event">
                <div className="eventImage">
                  <img src={el.image} alt="eventImage" />
                </div>
                <div className="eventDetails">
                  <h1>{el.title}</h1>
                  <p>{el.description}</p>
                  <p>{el.location}</p>
                  <p>{el.date}</p>
                  <p>{el.time}</p>
                </div>
              </div>
            </Link>
          );
        })
      }
      {/* add your children here (divs)
              ex : title, theme, description, date, time, location, image(optional)
              the classNames should be also : title, theme, description, date, time, location, image(optional)
             */}
      <div className="subscribedData">
        <div>
          <select
            value={"add your value here"} // add value here
            onChange={(e) => {}}
          >
            <option value="">------</option>
            <option value="bangalore">Bangalore</option>
            <option value="kolkata">Kolkata</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
          </select>
        </div>
        <Link to={"/addmeetup"}> Add Meetup</Link>
        <h1>Subscribed Events</h1>
        <div className="subscribedEvents">
          {/* All user subcribed events should be displayed here in an ascending order of date */}

          {[].map((el) => {
            return (
              <Link to={`add route here`} className="events">
                {/* Each event should have these elements/children (divs):
                    ex : title, theme, description, date, time, location, image(optional)
                    the classNames should be also : title, theme, description, date, time, location, image(optional) */}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
