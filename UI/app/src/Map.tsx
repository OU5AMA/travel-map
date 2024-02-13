import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Custom icon for the user's location
const userIcon = new L.Icon({
  iconUrl: "./assets/location-2955.svg",
  iconSize: [32, 32], //Size of the icon
  iconAnchor: [16, 32], //Position of the icon relative to its container
});

const Map = () => {
  const center = [33.997573, -6.747426];
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Check if geolocation is suppoeted by the browser
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
        },
        (error) => {
          console.error("Error getting user location: ", error);
        }
      );
    } else {
      console.error("Geolocation is not supported but this browser.");
    }
  }, [center]);
  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      >
        <Marker position={userLocation} icon={userIcon}>
          <Popup>
            Your location. <br /> Latitude: {center[0]}, Longitude: {center[1]}
          </Popup>
        </Marker>
      </TileLayer>
    </MapContainer>
  );
};

export default Map;
