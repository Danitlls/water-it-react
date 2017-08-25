
import React from 'react';
import NewPlantForm from './NewPlantForm';
import PropTypes from 'prop-types';


class NurseryControl extends React.Component {
  constructor(props) {
    super(props);
    this.showFormModal = this.showFormModal.bind(this);
    this.state = { formShowing: false};
  }


  showFormModal(){
  this.setState({
    formModalIsShowing: true
  });
}


  render(){
    return (
      <div>
        <button onClick={this.showFormModal}>Add new plant</button>
          <section>
            <NewPlantForm
              onNewPlantCreation={this.props.onNewPlantCreation}/>
          </section>
        </div>

    );
  }
}

NurseryControl.propTypes = {
  onNewPlantCreation: PropTypes.func
};

export default NurseryControl;
