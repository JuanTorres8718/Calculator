import React,{useState} from 'react';
import ContBtnLeft from './ContBtnLeft';
import '../styles/Content.css';
import ContBtnRight from './ContBtnRight';

const Content = () => {

    let [operation,setOperation]= useState(undefined);
    let [lastPressed, setLastPressed] = useState(undefined);
    let [number,setNumber] = useState('0');
    let [expression,setExpression] = useState(undefined)


    const handleClick=(e)=>{
        const {innerText} = e.target
        // console.log(!Number.isNaN(Number(innerText)))
        
        if(lastPressed === '=' && Number.isInteger(parseInt(innerText)) && number.toString().slice(-1) !== '.'){
            setNumber(number = '0')
            setLastPressed('')
        }   

        if(!Number.isNaN(Number(innerText))){
            if(number === '0'){
                setNumber(innerText)
            }else{      
                setNumber(number += innerText);
                setLastPressed('')
            } 
            return;
        }
        // console.log(!operation)
        switch(innerText){
            case 'C':
                setNumber('0');
                setExpression('')
                setOperation('')
                break;
            case '.':
                if(!number.toString().includes('.')){ 
                    setNumber(number += innerText)
                }
                break;
            default:
                if(!operation){
                    if(innerText !== '='){
                        setOperation(innerText);
                        setLastPressed(innerText);
                        setExpression(number);
                        setNumber('');
                    }
                   
                }else if(innerText === '='){
                    if(number !== ''){
                        expression = eval(`${expression} ${operation} ${number}`);
                        setNumber(expression);
                        setLastPressed(innerText);
                        setExpression('');
                        setOperation('');
                    }else{
                        
                        setNumber(expression)
                        setExpression('');
                        setOperation('');
                        setLastPressed(innerText);
                    }
                }else{
                    if((lastPressed === '/' || lastPressed === '*') && (innerText === '-' || innerText === '+')){
                        setOperation(operation += innerText);
                        setLastPressed(innerText);
                    }else if(lastPressed === '-' || lastPressed === '+' || lastPressed === '/' || lastPressed === '*'){
                        if(innerText === '*' || innerText === '/'){
                            setOperation(innerText);
                            setLastPressed(innerText);
                        }else if(operation.slice(0,1) === '*' || operation.slice(0,1) === '/'){
                            setOperation(operation = operation.slice(0,1)+innerText);
                            setLastPressed(innerText);
                        }else{
                            setOperation(innerText);
                            setLastPressed(innerText);
                        }
   
                        
                    }else{
                        expression = eval(`${expression} ${operation} ${number}`);
                        setOperation(innerText);
                        setNumber('');
                        setExpression(expression);
                         
                    }
                }    
            
        }


    }
    
    return ( 
        <div className="calculator">
            <div className="display">
                <div className="d-express">
                    <small>{expression} {operation}</small>
                </div>
                <div className="d-number">
                    <p>{number}</p>
                </div> 
            </div>
                <div className="btn-left">
                    <ContBtnLeft 
                        onClick = {handleClick}
                    />
                </div>

            <div className="btn-right">
                    <ContBtnRight
                        onClick = {handleClick}
                    />
            </div>   
        </div>
     );
}
 
export default Content;