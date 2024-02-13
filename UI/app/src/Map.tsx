
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet"



const Map = () => {
    const center = [33.997573, -6.747426];
    return ( 
        <MapContainer center={center} zoom={13} style={{height: "100vh", width: '100%'}} >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            >
            <Marker position={center}>
                <Popup>
                    Your location. <br /> Latitude: {center[0]}, Longitude: {center[1]}
                </Popup>
            </Marker>
            </TileLayer>
        </MapContainer>
     );
}
 
export default Map;