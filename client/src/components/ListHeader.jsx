import React from 'react';
import '../App.css';

const ListHeader = ({ listName }) => {
  const signOut = () => {
    console.log('sign out');
  };

  return (
    <div className="list-header">
      <h1>{listName}</h1>
      <div className="button-container">
        <button className="create-button">ADD NEW</button>
        <button className="signout-button" onClick={signOut}>
          SIGN OUT
        </button>
      </div>
    </div>
  );
}

export default ListHeader;