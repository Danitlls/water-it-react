
import React from 'react';
import NewPlantForm from './NewPlantForm';
import PropTypes from 'prop-types';


class NurseryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
  formShowing: false};
  }

hideForm(){
  this.setState({
    formShowing: false
  });
}
handleDisplayingNewTicketForm(){
  console.log("New ticket button was clicked!");
  this.setState({formShowing: true});
}

  render(){
    return (
      <div>
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
