import React from 'react';

function Events(props) {
  return (
    <div
      style={{
        border: '1px solid var(--ifm-color-emphasis-300)',
        borderRadius: '0 var(--ifm-pagination-nav-border-radius) var(--ifm-pagination-nav-border-radius) 0',
        lineHeight: 'var(--ifm-heading-line-height)',
        padding: 'var(--ifm-global-spacing)',
        transition: 'border-color var(--ifm-transition-fast) var(--ifm-transition-timing-default)',
        marginLeft: '-2px',
        marginBottom: '10px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      }}>
      <div style={{
        width: '100%',
      }}>
        <h4 span style={{
          fontWeight: '400',
        }}><span style={{
          marginRight: '10px',
          height: '15px',
          width: '15px',
          backgroundColor: props.black ? 'var(--ifm-color-emphasis-100)' : 'var(--ifm-color-emphasis-600)',
          border: props.black ? '2px solid var(--ifm-color-emphasis-0)' : '2px solid var(--ifm-color-emphasis-900)',
          borderRadius: '50%',
          display: 'inline-block',
        }}></span>{props.title}</h4>
        <div>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Events;
