import * as React from 'react';

function PeriodCard(props) {
  return (
    <div
      style={{
        border: '2px solid var(--ifm-color-emphasis-300)',
        borderRadius: 'var(--ifm-pagination-nav-border-radius) var(--ifm-pagination-nav-border-radius) 0 0',
        lineHeight: 'var(--ifm-heading-line-height)',
        padding: 'var(--ifm-global-spacing)',
        transition: 'border-color var(--ifm-transition-fast) var(--ifm-transition-timing-default)',
        marginLeft: '-2px',

        boxShadow: '0 10px 15px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
      }}>
      <div>
        <div style={{
          marginLeft: '10px',
          display: 'inline-block',
        }}>
          <h2><span style={{
            marginRight: '15px',
            marginBottom: '-5px',
            height: '30px',
            width: '30px',
            backgroundColor: props.black ? 'var(--ifm-color-emphasis-100)' : 'var(--ifm-color-emphasis-600)',
            border: props.black ? '2px solid var(--ifm-color-emphasis-0)' : '2px solid var(--ifm-color-emphasis-900)',
            borderRadius: '50%',
            display: 'inline-block',
            
          }}></span>{props.title}</h2>
          <div>
            {props.children}
          </div>
        </div>
      </div>

    </div>
  );
}

export default PeriodCard;
