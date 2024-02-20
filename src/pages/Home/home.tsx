import React from "react";
import Navigation from "../../components/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carousel from "./Carousel";
import Log from "../log/Log";
import Project from "../project/Project";
import Game from "../game/Game";
import Message from "../message/Message";
function Home(): JSX.Element {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Carousel />} />
        <Route path="/log" element={<Log />} />
        <Route path="/project" element={<Project />} />
        <Route path="/game" element={<Game />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Home;
