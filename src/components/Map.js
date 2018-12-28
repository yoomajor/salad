import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import Marker from "./Marker";

const Map = withScriptjs(withGoogleMap((props) =>{
  
  const markers = props.area.map( (smoking, i) => <Marker
                  key={i}
                  uid={smoking.uid}
                  smoking={smoking}
                  location={smoking.location}
                  active={props.active}
                />);

  const addArea = (map) =>{
    let add_uid = props.area.length,
        add_lat = Number(map.latLng.lat()),
        add_lng = Number(map.latLng.lng()),
        add_location = {lat: add_lat, lng: add_lng},
        add_memo = '한번 추가해보자'+add_uid,
        data = {
          uid: add_uid,
          location: add_location,
          memo: add_memo
        };
    props.add(data);
  }
                 
  return (
    <>
      <GoogleMap
        zoom={15}
        center={ { lat: 37.3763929, lng: 127.110943 } }
        onRightClick={addArea}
        >
        {markers}
      </GoogleMap>
    </>
    );
  }
))

export default Map;