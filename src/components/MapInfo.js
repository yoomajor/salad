import React from 'react';

const MapInfo = (props) => {
  const area = props.area;
  const selected = props.selected;
  console.log(area);
  return (
    <>
      <ul className="list">
        { area.map( (area, i) => 
            <li key={i} className={i === selected ? 'active' : 'unActive'}>
              <p className="label">{area.location.lat} | {area.location.lng}</p>
              <p className="label">메모</p>
              <p>{area.memo}</p>
            </li>
        ) }
      </ul>
    </>
  );
}
export default MapInfo

