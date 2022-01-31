import React from 'react';

const InstitutionalLogos = (props) => {
  return <div>
       <div style={{paddingInline: '57px 0 80 px'}}>
            <div className="boxes">
              <img
                className="institutionalLogos"
                src={props.logo}
                alt="logo"
              ></img>
            </div>
            </div>
            <div>
              <p className= 'footerText'>{props.footerText}</p>
            </div>
  </div>;
};

export default InstitutionalLogos;
