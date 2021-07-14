import React,{useEffect,useState} from 'react';
import ReactDOM from 'react-dom';


const Letus = () => {
    const [counter,setCounter] = useState(0);
    const [byTwo,setByTwo] = useState(0);
    const [superFast,setSuperFast] = useState(0);
    const [staticVal,setStatic] = useState(0);

    const addOne = () => {
        setCounter(counter+1)
    };

    const staticValue = () => {
        setStatic(staticVal+100);
    };

    useEffect(() => {
        staticValue();
    },[]);

    useEffect(() => {
        setByTwo(counter+1)
    },[counter]);
    
    useEffect(() => {
        setSuperFast(superFast+1)
    },[superFast]);

    return(
        <>
        {/* per button click will trigger addone and change its value that will cause useEffect*/}
            <button onClick={addOne}>Click me to increment</button>
            <p>using UseEffect</p>
            <h1>{byTwo}</h1>
            <h1>{counter}</h1>
        {/* this is infinite UseEffect because it keeps changing its value*/}
            <p>infinite UseEffect</p>
            <h1>{superFast}</h1>
        {/* Static on load only*/}
            <p>using UseEffect but one time use only</p>
            <h1>{staticVal}</h1>
            
        </>
    );
};

export default Letus;

if (document.getElementById('letus')) {
    ReactDOM.render(<Letus />, document.getElementById('letus'));
}