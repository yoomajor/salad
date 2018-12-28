import React from "react";
import { Marker } from "react-google-maps";
import smokingIcon from "../image/smokingIcon.png";



const Markers = (props) =>{

  const {uid} = props;
  const viewArea = () =>{
    props.active(uid);
  }

  return(
    <Marker
      position={props.location}
      icon={smokingIcon}
      onClick={viewArea}
    >
    </Marker>
  );
}
export default Markers;