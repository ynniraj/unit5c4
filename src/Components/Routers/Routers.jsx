import { Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import { LoginSignUp } from "../LoginSignUp/LoginSignUp";
import { Navbar } from "../Navbar/Navbar";
import { AddMeetup } from "../AddMeetup/AddMeetup";
import { Event } from "../Event/Event";
export const Routers = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginsignup" element={<LoginSignUp />} />
        <Route path="/addmeetup" element={<AddMeetup />} />
        <Route path="/events/:id" element={<Event />} />
      </Routes>
    </>
  );
};
