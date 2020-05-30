import React from 'react';


const ContBtnLeft = ({onClick}) =>( 
    <React.Fragment> 
    <button onClick={onClick} id="divide">/</button>
    <button onClick={onClick} id="multiply">*</button>
    <button onClick={onClick} id="substract">-</button>
    <button onClick={onClick} id="seven">7</button>
    <button onClick={onClick} id="eight">8</button>
    <button onClick={onClick} id="nine">9</button>
    <button onClick={onClick} id="four">4</button>
    <button onClick={onClick} id="five">5</button>
    <button onClick={onClick} id="six">6</button>
    <button onClick={onClick} id="one">1</button>
    <button onClick={onClick} id="two">2</button>
    <button onClick={onClick} id="three">3</button>
    <button onClick={onClick} id="zero" className="btn-zero">0</button>
    <button onClick={onClick} id="decimal">.</button>
    </React.Fragment>
)

 
export default ContBtnLeft;