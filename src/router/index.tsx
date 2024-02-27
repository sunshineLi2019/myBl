import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Carousel from "../pages/Home/Carousel";
import Log from "../pages/log/Log";
import Project from "../pages/project/Project";
import Game from "../pages/game/Game";
import Message from "../pages/message/Message";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Carousel /> },
      { path: "/log", element: <Log /> },
      { path: "/project", element: <Project /> },
      { path: "/game", element: <Game /> },
      { path: "/message", element: <Message /> },
    ],
  },
]);
export default router;
