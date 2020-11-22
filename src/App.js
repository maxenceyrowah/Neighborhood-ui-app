import "./App.css";
import Dashboard from "./components/Dashboard";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { useEffect } from "react";
import ReactGA from "react-ga";

const App = () => {
  useEffect(() => {
    ReactGA.initialize("G-YKPQNMPEWK");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="App">
      <Dashboard />
    </div>
  );
};

export default App;
