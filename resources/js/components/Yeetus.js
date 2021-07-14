import React,{useEffect,useState} from 'react';
import ReactDOM from 'react-dom';

const Yeetus = () => {
    const [header,setHeader] = useState();
    const [inputVal, setInputVal] = useState();
    
    const getHeader = (data) => {
        if(data == null) {
            setHeader('YEEEEEEEEEEEETUS');
        }else {
            setHeader(data);
        }
    };

    return(
        <>
            <h1>{header}</h1>
            <button onClick={() => getHeader(null)}>Click me</button>
            <input onChange={(e) => setInputVal(e.target.value)}/>
            <button onClick={() => getHeader(inputVal)}>Change H1</button>
        </>
    );
};

export default Yeetus;

if (document.getElementById('yeetus')) {
    ReactDOM.render(<Yeetus />, document.getElementById('yeetus'));
}