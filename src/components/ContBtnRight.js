import React from 'react';


const ContBtnRight = ({onClick}) =>(
    <React.Fragment>
        <button onClick={onClick} id="add">+</button>
        <button onClick={onClick} id="clear" className="button-lg">C</button>
        <button onClick={onClick} id="equals" className="button-lg">=</button>
                
    </React.Fragment>
  )

 
export default ContBtnRight;