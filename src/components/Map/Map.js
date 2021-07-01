import React from "react";
import { GoogleMap, Marker, withGoogleMap } from "react-google-maps";
import data from "../../assets/data/data.json";
import "./Map.css";

function Map() {
  const GoogleMapExample = withGoogleMap((props) => (
    <GoogleMap
      defaultCenter={{ lat: 46.124476666666666, lng: 3.41733 }}
      defaultZoom={13}
    ></GoogleMap>
  ));
  return (
    <div className="map">
      <div>
        <GoogleMapExample
          containerElement={
            <div
              style={{ height: `calc(100vh - 50px - 32px)`, width: "100%" }}
            />
          }
          mapElement={<div style={{ height: `100%` }} />}
        >
          {data.map((item) => (
            <Marker position={{ lat: item.latitude, lng: item.longitude }} />
          ))}
        </GoogleMapExample>
      </div>
    </div>
  );
}

export default Map;
