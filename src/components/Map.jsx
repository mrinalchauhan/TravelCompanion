// import React from "react";
// import { MapContainer, TileLayer, Marker } from 'react-leaflet';
// import L from "leaflet";
// import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
// import markerIcon from "leaflet/dist/images/marker-icon.png";
// import markerShadow from "leaflet/dist/images/marker-shadow.png";
// import 'leaflet/dist/leaflet.css';

// // @ts-ignore
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconUrl: markerIcon.src,
//   iconRetinaUrl: markerIcon2x.src,
//   shadowUrl: markerShadow.src,
// });
// const Map = ({ getSource, getDestination }) => {
//     return (
//         <>
//             <div className="">
//                 <MapContainer center={getSource || [25.5941, 85.1376]} zoom={4} scrollWheelZoom={false} >
//                     <TileLayer
//                         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                     />

//                     {getSource && <Marker position={getSource}>  </Marker>}
//                     {getDestination && <Marker position={getDestination}> </Marker>}
//                 </MapContainer>
//             </div>
//         </>
//     );
// };
// export default Map;


import React from "react";
import { Map, Marker, ZoomControl } from 'pigeon-maps';

const MapComponent = ({ getSource, getDestination }) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Map
        center={getSource || [25.5941, 85.1376]} // Default center coordinates
        zoom={6} // Default zoom level
        height={500} // Height of the map container
        width="100%" // Width of the map container
      > 
       
        {getSource && <Marker anchor={getSource} />}
        {getDestination && <Marker anchor={getDestination} />}
        <ZoomControl />
      </Map>
    </div>
  );
};

export default MapComponent;
