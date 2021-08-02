import React from 'react';

function Scenes(props) {
  return (
    <div
      style={{
        flex: '1 60%',
        maxWidth: '60%',
        paddingLeft: '10px',
      }}>
        {props.children}
      <div
        style={{
          display: 'inline-block',
          marginBottom: '5px',
          height: '0px',
        }}></div>
    </div>
  );
}

export default Scenes;
