import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

const tokenMapbox = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
const styles = {
  height: 650,
};
const Mapbox = () => {
  const mapContainerRef = useRef(null);

  const geocoder = new MapboxGeocoder({
    accessToken: tokenMapbox,
    mapboxgl: mapboxgl,
    placeholder: "Search Score by State, County, City, Zip, or Neighborhood",
  });

  useEffect(() => {
    let hoveredStateId = null;
    const hoveredArea = document.getElementById("country__hovername");
    const geoCoderSearch = document.getElementById("geoCoder-searchBar");

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      accessToken: tokenMapbox,
      center: [-94, 37.5],
      style: "mapbox://styles/mapbox/streets-v11",
      zoom: 3.1,
      attributionControl: false,
    });

    map.addControl(new mapboxgl.NavigationControl(), "top-left");

    map.on("load", () => {
      map.addSource("states", {
        type: "geojson",
        data: "https://docs.mapbox.com/mapbox-gl-js/assets/us_states.geojson",
      });

      map.addLayer({
        id: "state-fills",
        type: "fill",
        source: "states",
        paint: {
          "fill-color": "#ffffff",
          "fill-opacity": [
            "case",
            ["boolean", ["feature-state", "hover"], false],
            0.5,
            0,
          ],
        },
      });

      map.on("mousemove", "state-fills", (e) => {
        if (e.features.length > 0) {
          if (hoveredStateId) {
            map.setFeatureState(
              { source: "states", id: hoveredStateId },
              { hover: false }
            );
          }
          hoveredStateId = e.features[0].id;
          map.setFeatureState(
            { source: "states", id: hoveredStateId },
            { hover: true }
          );
          map.getCanvas().style.cursor = "pointer";
          hoveredArea.textContent =
            "State: " + e.features[0].properties.STATE_NAME;
        }
      });

      map.on("mouseleave", "state-fills", () => {
        if (hoveredStateId) {
          map.setFeatureState(
            { source: "states", id: hoveredStateId },
            { hover: false }
          );
        }
        hoveredStateId = null;
        map.getCanvas().style.cursor = "";
      });

      map.on("click", "state-fills", (e) => {
        const coordinates = e.features[0].geometry.coordinates[0];

        const bounds = coordinates.reduce(function (bounds, coord) {
          return bounds.extend(coord);
        }, new mapboxgl.LngLatBounds(coordinates[0], coordinates[0]));

        map.fitBounds(bounds, {
          padding: 30,
          offset: [0, 0],
        });
      });

      map.addSource("counties", {
        type: "vector",
        url: "mapbox://mapbox.82pkq93d",
      });

      map.addLayer({
        id: "counties",
        type: "fill",
        source: "counties",
        "source-layer": "original",
        minzoom: 5,
        maxzoom: 10,
        paint: {
          "fill-outline-color": "#000000",
          "fill-color": "#fff",
          "fill-opacity": 0.1,
        },
      });
      map.addLayer({
        id: "counties-highlighted",
        type: "fill",
        source: "counties",
        "source-layer": "original",
        minzoom: 5,
        maxzoom: 10,
        paint: {
          "fill-outline-color": "#ffffff",
          "fill-color": "#000000",
          "fill-opacity": 0.1,
        },
        filter: ["in", "COUNTY", ""],
      });

      map.on("mousemove", "counties", (e) => {
        if (e.features.length > 0) {
          map.getCanvas().style.cursor = "pointer";

          const feature = e.features[0];
          hoveredArea.textContent = "County: " + feature.properties.COUNTY;
          map.setFilter("counties-highlighted", [
            "in",
            "COUNTY",
            feature.properties.COUNTY,
          ]);
        }
      });

      map.on("mouseleave", "counties", () => {
        map.getCanvas().style.cursor = "";
        map.setFilter("counties-highlighted", ["in", "COUNTY", ""]);
      });

      map.on("click", "counties", (e) => {
        const coordinates = e.features[0].geometry.coordinates[0];

        const bounds = coordinates.reduce(function (bounds, coord) {
          return bounds.extend(coord);
        }, new mapboxgl.LngLatBounds(coordinates[0], coordinates[0]));

        map.fitBounds(bounds, {
          padding: 30,
          offset: [0, 0],
        });
      });

      map.on("mousemove", "settlement-label", (e) => {
        if (e.features.length > 0) {
          map.getCanvas().style.cursor = "pointer";
          hoveredArea.textContent = "City: " + e.features[0].properties.name;
        }
      });

      map.on("mousemove", "settlement-subdivision-label", (e) => {
        if (e.features.length > 0) {
          map.getCanvas().style.cursor = "pointer";
          hoveredArea.textContent = "Sub: " + e.features[0].properties.name;
        }
      });
    });

    geoCoderSearch.appendChild(geocoder.onAdd(map));

    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div style={styles} ref={mapContainerRef} />;
};

export default Mapbox;
