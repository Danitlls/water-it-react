
import React from 'react';
import Plant from './Plant';
import PropTypes from 'prop-types';

function PlantList(props){
    console.log(props)
  return (
    <div>
      <h4>Here should be the list, starts with two hardcoded elements:</h4>
      <Plant/><hr/>
      {props.plantList.map((plant, index) =>
        <Plant name={plant.name} waterSchedule={plant.waterSchedule} key={index} />
      )}
    </div>
  );

}

PlantList.propTypes = {
  plantList: PropTypes.array
};

export default PlantList;
