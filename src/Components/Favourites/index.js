import React from 'react';
import './styles.css';
import Text from '../Text/index';

function Favourites() {
  return (
    <div className="favourites">
      <div className="fav-title">
        <Text heading>Favourites</Text>
      </div>
      <div className="elements">
        elements
      </div>
    </div>
  );
}

export default Favourites;
