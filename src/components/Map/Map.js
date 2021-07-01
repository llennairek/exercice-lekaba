import React from "react";
import { GoogleMap, Marker, withGoogleMap } from "react-google-maps";
import data from "../../assets/data/data.json";
import "./Map.css";

function Map() {
  const GoogleMapExample = withGoogleMap((props) => (
    <GoogleMap defaultCenter={{ lat: 46.12966, lng: 3.42564 }} defaultZoom={14}>
      {data.map((item) => (
        <Marker
          position={{
            lat: item.latitude,
            lng: item.longitude,
          }}
        />
      ))}
    </GoogleMap>
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
        ></GoogleMapExample>
      </div>
    </div>
  );
}

export default Map;
