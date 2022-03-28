import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../../Redux/Login/action";

export const LoginSignUp = () => {
  const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [interests, setInterests] = useState("");
  const [Image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/users", {
        name: name,
        password: password,
        location: location,
        interests: interests,
        Image: Image,
      })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("userLoginDetails", JSON.stringify(response.data));
        const localStorageData = localStorage.getItem("userLoginDetails");
        dispatch(userLogin(localStorageData));
      });
  };

  const localStorageData = localStorage.getItem("userLoginDetails");
  dispatch(userLogin(localStorageData));

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:8080/users", {
        name: name,
        password: password,
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className="loginSignUp">
      <form className="signUp" onSubmit={handleSubmit}>
        <h1>SignUp</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          onChange={(event) => {
            setName(event.target.value);
          }}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          required
        />
        <br />
        <select
          value={""}
          className="location"
          onChange={(event) => {
            setLocation(event.target.value);
          }}
        >
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <label>Interests</label>
        <br />
        <label>technology</label>
        <input
          type="checkbox"
          className="technology"
          onChange={(event) => {
            setInterests(event.target.className);
          }}
        />
        <br />
        <label>food</label>
        <input
          type="checkbox"
          className="food"
          onChange={(event) => {
            setInterests(event.target.className);
          }}
        />
        <br />
        <label>movies</label>
        <input
          type="checkbox"
          className="movies"
          onChange={(event) => {
            setInterests(event.target.className);
          }}
        />
        <br />
        <label>culture</label>
        <input
          type="checkbox"
          className="culture"
          onChange={(event) => {
            setInterests(event.target.className);
          }}
        />
        <br />
        <label>art</label>
        <input
          type="checkbox"
          className="art"
          onChange={(event) => {
            setInterests(event.target.className);
          }}
        />
        <br />
        <label>drama</label>
        <input
          type="checkbox"
          className="drama"
          onChange={(event) => {
            setInterests(event.target.className);
          }}
        />
        <br />
        <label>image</label>
        <input
          type="text"
          className="image"
          onChange={(event) => {
            setImage(event.target.value);
          }}
          required
        />
        <br />
        <input type="submit" className="submitSignUpForm" />
      </form>

      <form className="login" onSubmit={handleLogin}>
        <h1>Login</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          onChange={(event) => {
            setName(event.target.value);
          }}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          required
        />
        <br />
        <input type="submit" className="submitLoginForm" />
      </form>
    </div>
  );
};
