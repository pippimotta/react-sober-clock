import React from  'react';
export default function Toggler(props){
  return(
    <div className={props.lightMode? "toggler light":'toggler'}>
      <p className="toggler--light">Light</p>
       <div className="toggler--slider"
        onClick={props.toggleLightMode}
        >
        <div className="toggler--slider--circle"></div>
       </div>
        <p className="toggler--dark">Dark</p>
      </div>
  )
}
