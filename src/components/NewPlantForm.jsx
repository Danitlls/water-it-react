import React from 'react';
import PlantModel from '../models/plant.js';
import PropTypes from 'prop-types';

class NewPlantForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleNewPlantFormSubmission = this.handleNewPlantFormSubmission.bind(this);
  }

  handleNewPlantFormSubmission(event) {
    event.preventDefault();
    const { _name, _waterSchedule } = this.refs;
    var newPlant = new PlantModel(_name.value, waterSchedule.value);
    this.props.onNewPlantCreation(newPlant);
    console.log(newPlant)
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleNewPlantFormSubmission}>
          <input
            ref='_names'
            type='text'
            id='name'
            placeholder='Plant Name'/>
          <input
            ref='_waterSchedule'
            type='text'
            id='water'
            placeholder='Water Needs'/>
          <button type='submit'>Add New Plant</button>
        </form>
      </div>
    );
  }
}

NewPlantForm.propTypes = {
  onNewPlantCreation: PropTypes.func

};

export default NewPlantForm;
