
import React from 'react';
import Plant from './Plant';
import PropTypes from 'prop-types';

function PlantList(props){
    console.log(props)
  return (
    <div>
      <h4>Here should be the list, witch is empty</h4>

      <hr/>
      {props.plantList.map((plant, index) =>
        <Plant name={plant.name}

          key={index}/>
      )}
    </div>
  );

}

PlantList.propTypes = {
  plantList: PropTypes.array
};

export default PlantList;
