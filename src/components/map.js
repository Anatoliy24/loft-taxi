import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import {useSelector} from "react-redux";
import drawRoute from "./drawRoute";

mapboxgl.accessToken =
    'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';



const Map = () => {
    const mapContainerRef = useRef(null);

    const [lng, setLng] = useState(30.315868);
    const [lat, setLat] = useState(59.939095);
    const [zoom, setZoom] = useState(15);


    const coordinates = useSelector((state) => state.routingMap.coordinates)
    const mapRoute = useRef()


    // Initialize map when component mounts
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/light-v10',
            center: [lng, lat],
            zoom: zoom
        });
        mapRoute.current = map
        // Clean up on unmount
        return () => {
            map.remove();
        }

    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    console.log('mapContainerRef', mapContainerRef)
    //
    useEffect(() => {
        console.log('coordinatesArray.length', coordinates.length)
        if (coordinates.length !== 0 ) {
           drawRoute(mapRoute.current, coordinates)
        }

    }, [coordinates]);


    return (
        <div>
            <div className='map-container' ref={mapContainerRef} />
        </div>
    );

};



export default Map;