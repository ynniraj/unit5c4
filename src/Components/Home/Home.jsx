import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../Redux/Login/action";
export const Home = () => {
  const navigate = useNavigate();
  const [meetups, setMeetups] = useState([]);
  const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch();

  const localStorageData = localStorage.getItem("userLoginDetails");
  dispatch(userLogin(localStorageData));

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
            <Link to={`/addmeetup/events`} className="events">
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
