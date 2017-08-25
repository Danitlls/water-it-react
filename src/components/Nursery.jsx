import React from 'react';
import PlantList from './PlantList';
import NurseryControl from './NurseryControl';

class Nursery extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      masterPlantList: [],
    };
    this.addNewPlantToList = this.addNewPlantToList.bind(this);
  }

addNewPlantToList(newPlant){
  let newMasterPlantList = this.state.masterPlantList.slice();
  newMasterPlantList.push(newPlant);
  this.setState({masterPlantList : newMasterPlantList});
}

  render() {
    return (
      <div>
        <PlantList
          plantList = {this.state.masterPlantList}
        />
      <NurseryControl onNewPlantCreation={this.addNewPlantToList} />
      </div>
    )
  }
}

export default Nursery;
