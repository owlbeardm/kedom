import * as React from 'react';

function PeriodLink(props) {
  return (
    <div
      style={{
        marginTop: '30px',
      }}>
      <a href="year">
        <div
          style={{
            border: '2px solid var(--ifm-menu-color-active)',
            borderRadius: 'var(--ifm-pagination-nav-border-radius) var(--ifm-pagination-nav-border-radius) var(--ifm-pagination-nav-border-radius) var(--ifm-pagination-nav-border-radius)',
            lineHeight: 'var(--ifm-heading-line-height)',
            padding: 'var(--ifm-global-spacing)',
            transition: 'border-color var(--ifm-transition-fast) var(--ifm-transition-timing-default)',
            marginLeft: '-2px',
            boxShadow: '0 10px 15px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
            transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
          }}>
          <div>
            <div style={{
              color: 'var(--ifm-menu-color-active)',
              marginLeft: '10px',
              marginBottom: '0px',
              display: 'inline-block',
            }}>
              <h2 style={{ 
                color: 'var(--ifm-menu-color-active)', 
                marginBlockEnd: '5px', 
                ':hover': {
                  color: 'red',
                }}}><span style={{
                  marginRight: '15px',
                  marginBottom: '-5px',
                  height: '30px',
                  width: '30px',
                  backgroundColor: props.black ? 'var(--ifm-color-emphasis-100)' : 'var(--ifm-color-emphasis-600)',
                  border: '2px solid var(--ifm-menu-color-active)',
                  borderRadius: '50%',
                  display: 'inline-block',
                
              }}></span>{props.title}</h2>
              <div style={{ color: 'var(--ifm-menu-color-active)', }}>
                {props.children}
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default PeriodLink;
