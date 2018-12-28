import React, { Component } from 'react';
import Map from "../components/Map";
import MapInfo from "../components/MapInfo";

class MapContainer extends Component {
  
  state = {
    selected: 0,
    area: [
      { uid: 0, location: {lat: 37.3750456, lng: 127.1123059}, memo: '주차장입구 바로 뒤' },
      { uid: 1, location: {lat: 37.375881, lng: 127.1130893}, memo: '비공식흡구 / 새마을식당 사장님이 입구쪽에 재떨이 놔둠' },
      { uid: 2, location: {lat: 37.375386, lng: 127.112767}, memo: '주변에 담벼락 세워놨어요 눈치안보고 필수있어요 개꿀' },
      { uid: 3, location: {lat: 37.378029, lng: 127.114187}, memo: '비추// 두블럭 뒤에 어린이집 있어요 낮엔 웬만하면 피지맙시다' },
      { uid: 4, location: {lat: 37.378195, lng: 127.113264}, memo: '[침/가래주의] 고등학생들 자주옴' },
    ]
  }

  onMapAdd = (data) =>{
    const { area } = this.state;
    this.setState({
      area: area.concat({...data})
    })
  }

  onListActive = (uid) =>{
    let idx = Number(uid);
    this.setState({
      selected: idx
    });
  }

	render() {
    
		return (
      <>
        <div className="container">
          
          <div id="map">
            <Map
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCpZ07sOXqw2NSMtb9ciPJqTuTFGBqWmhE&v=3.exp&libraries=geometry,drawing,places`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%`, width: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              area={this.state.area}
              active={this.onListActive}
              add={this.onMapAdd}
            />
          </div>
          <div className="mapInfo">
            <MapInfo
              area={this.state.area}
              selected={this.state.selected}
             />
          </div>
        </div>
      </>
		);
	}
}

export default MapContainer