import React from 'react';
import NewPlantForm from './NewPlantForm';
import PropTypes from 'prop-types';


class NurseryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {formVisibleOnPage: false};
    this.handleDisplayingNewPlantForm = this.handleDisplayingNewPlantForm.bind(this);
  }

  handleDisplayingNewPlantForm(event){
     console.log("New Plant button was clicked!");
     this.setState({formVisibleOnPage: true});
   }

  render(){
    return (
      <div>
        <button  onClick={this.handleDisplayingNewPlantForm}>Want to add new plant?</button>
        <section>
          <NewPlantForm />
        </section>
      </div>
    );
  }
}

NurseryControl.propTypes = {
  onNewPlantCreation: PropTypes.func
};

export default NurseryControl;
