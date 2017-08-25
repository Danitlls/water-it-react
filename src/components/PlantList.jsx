
import React from 'react';
import Plant from './Plant';
import PropTypes from 'prop-types';

function PlantList(props){
  return (
    <div>
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
