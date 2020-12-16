import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import {useSelector} from "react-redux";

mapboxgl.accessToken =
    'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';



const Map = () => {
    const mapContainerRef = useRef(null);

    const [lng, setLng] = useState(30.315868);
    const [lat, setLat] = useState(59.939095);
    const [zoom, setZoom] = useState(15);


    const coordinates = useSelector((state) => state.routingMap.coordinates)
    console.log('coordinatesMAP', JSON.stringify(coordinates))

    // Initialize map when component mounts
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/light-v10',
            center: [lng, lat],
            zoom: zoom
        });
        // console.log(map)
        // console.log(coordinates)
        // Clean up on unmount
        return () => {

            map.remove();
        }

    }, []); // eslint-disable-line react-hooks/exhaustive-deps



    return (
        <div>
            <div className='map-container' ref={mapContainerRef} />
        </div>
    );

};
export const drawRoute = (map, coordinates) => {

    map.flyTo({
        center: coordinates[0],
        zoom: 15
    });


    map.addLayer({
        id: "route",
        type: "line",
        source: {
            type: "geojson",
            data: {
                type: "Feature",
                properties: {},
                geometry: {
                    type: "LineString",
                    coordinates
                }
            }
        },
        layout: {
            "line-join": "round",
            "line-cap": "round"
        },
        paint: {
            "line-color": "#ffc617",
            "line-width": 8
        }
    });
};




export default Map;