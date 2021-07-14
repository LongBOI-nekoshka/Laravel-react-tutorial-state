import React,{useEffect,useState} from 'react';
import ReactDOM from 'react-dom';

const Deletus = () => {
    const [title, setTitle] = useState('new react laravel app');

    const changeTitle = () => {
        setTitle('now Its not New');
    }

    const changeUrl = (data) => {
        window.location = data;
    };

    return(
        <>
            <h1>{title}</h1>
            <button onClick={changeTitle}>Hmmmm...</button>
            <button onClick={()=>changeUrl('/letus')}>Goto Letus</button>
            <button onClick={()=>changeUrl('/yeetus')}>Goto Yeetus</button>
        </>
    );
};

export default Deletus;

if (document.getElementById('deletus')) {
    ReactDOM.render(<Deletus />, document.getElementById('deletus'));
}