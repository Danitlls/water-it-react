import React from 'react';
import PlantModel from '../models/plant.js';
import PropTypes from 'prop-types';



class Plant extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      plant: new PlantModel('tomatoes', 'every 48 hours'),
      onStock: true,
      timeSinceLastWater : "a few seconds ago",
    }
    console.log(this.state);
  }

  render(){
    return (
      <div>
        <h3>carrots - every 24 hs</h3>

        <h3>{this.state.plant.name} - {this.state.plant.waterSchedule} -  <span>{this.state.timeSinceLastWater}</span> </h3>
      </div>
    )
  }

}
Plant.propTypes = {
  name: PropTypes.string,
  waterSchedule: PropTypes.string,
};

export default Plant;
