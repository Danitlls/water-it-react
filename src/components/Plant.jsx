import React from 'react';
import PlantModel from '../models/plant.js';
import PropTypes from 'prop-types';



class Plant extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      plant: new PlantModel('tomatoes', 'every 48 hours'),
      onStock: true,
      timeSinceLastWater : "a few seconds",
    }
    console.log(this.state);
  }

  render(){
    return (
      <div>
        <h3>{this.state.plant.name} - {this.state.plant.waterSchedule} </h3>
      </div>
    )
  }

}
export default Plant;
