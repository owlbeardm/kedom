import React from 'react';

function EventCard(props) {
  return (
    <div
      style={{
        border: '1px solid var(--ifm-color-emphasis-300)',
        borderLeft: '2px solid var(--ifm-color-emphasis-300)',
        borderRadius: '0 0 var(--ifm-pagination-nav-border-radius) 0',
        lineHeight: 'var(--ifm-heading-line-height)',
        padding: 'var(--ifm-global-spacing)',
        transition: 'border-color var(--ifm-transition-fast) var(--ifm-transition-timing-default)',
        flex: '1 40%',
        maxWidth: '40%',
        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
      }}>
      <div style={{
        width: '100%',
      }}>
        <h3 span style={{
          fontWeight: '400',
        }}><span style={{
            marginRight: '10px',
            height: '20px',
            width: '20px',
            backgroundColor: props.black ? 'var(--ifm-color-emphasis-100)' : 'var(--ifm-color-emphasis-600)',
            border: props.black ? '2px solid var(--ifm-color-emphasis-0)' : '2px solid var(--ifm-color-emphasis-900)',
            borderRadius: '50%',
            display: 'inline-block',
          }}></span>{props.title}</h3>
        <div>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default EventCard;
