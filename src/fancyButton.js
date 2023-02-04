import React, { useRef } from "react";


const handleClick = () => {
    console.log('click');
}

const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton" onClick={handleClick}>
      {props.children}
    </button>
  ));
  
  // You can now get a ref directly to the DOM button:
  

  export function FancyButtonComponent(){
    const ref = React.createRef();



    return (
        <FancyButton ref={ref}>Click me!</FancyButton>
    )
    
  }
