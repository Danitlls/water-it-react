import React from 'react';
import PlantModel from '../models/plant.js';
import PropTypes from 'prop-types';



function Plant(props) {
  return (
    <div>
      <h3>{props.name} - {props.waterSchedule} -  <span>{props.timeSinceLastWater}</span> </h3>
      <button>Watered it!</button>
      <button>Remove</button>
    </div>
  )
}

Plant.propTypes = {
  name: PropTypes.string,
  waterSchedule: PropTypes.string,
};

export default Plant;
