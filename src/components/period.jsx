import * as React from 'react';

function Period(props) {
  return (
    <div
      style={{
        marginTop: '30px',
        borderLeft: '2px dotted var(--ifm-color-emphasis-300)',
        borderRadius: 'var(--ifm-pagination-nav-border-radius) var(--ifm-pagination-nav-border-radius) var(--ifm-pagination-nav-border-radius) 0',
      }}>
        {props.children}
    </div>
  );
}

export default Period;
