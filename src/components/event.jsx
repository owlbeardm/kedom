import React from 'react';

function Event(props) {
  return (
    <div style={{
      display: 'flex',
      marginTop: '20px'
    }}>
      {props.children}
    </div>
  );
}

export default Event;
