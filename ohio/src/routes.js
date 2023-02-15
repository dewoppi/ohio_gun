import Contact from "./components/Pages/Contact/Contact";
import Blog from "./components/Pages/Home/Blog/Blog";
import Home from "./components/Pages/Home/Home";

const route = [
  {
    path: "/",
    exact: true,
    component: <Home />,
    fallback: <Home />,
  },
  {
    path: "/Blog",
    exact: true,
    component: <Blog />,
  },
  {
    path: "/Contact",
    exact: true,
    component: <Contact />,
  },
];

export default route;
