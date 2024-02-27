import React from "react";
import Navigation from "../../components/Navigation";
import { Outlet } from "react-router-dom";

function Home(): JSX.Element {
  return (
    <>
      <Navigation />
      <Outlet></Outlet>
    </>
  );
}

export default Home;
