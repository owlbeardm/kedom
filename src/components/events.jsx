import * as React from 'react';

function Events(props) {
  return (
    <div style={{
      marginLeft: '-2px'
    }}>
      {props.children}
    </div>
  );
}

export default Events;
