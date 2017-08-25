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

componentDidMount() {
  this.timeSinceOpenedChecker = setInterval(() =>
    this.updatePlantTimeSinceOpened(),
    500000
  );
}
componentWillUnmount(){
  clearInterval(this.timeSinceOpenedChecker);
}

addNewPlantToList(newplant){
  var newMasterplantList = this.state.masterplantList.slice();
  newMasterplantList.push(newplant);
  this.setState({masterplantList: newMasterplantList});
}

updateplantTimeSinceOpened() {
  console.log("check");
  let newMasterplantList = this.state.masterplantList.slice();
  newMasterplantList.forEach((plant) =>
    plant.setTimeSinceOpened()
  );
  this.setState({masterplantList:newMasterplantList})
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
