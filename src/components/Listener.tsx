import React, {useState} from 'react';
import listener from "../store/listener";
import {observer} from "mobx-react-lite";
import {useListener} from "./hooks/useListener";

const Listener = observer(() => {

    const {reset, timer} = useListener();

    return (
        <div className="container">
            <pre onClick={()=>listener.addClick()} onMouseOver={()=>listener.addMouseOver()} onMouseOut={()=>listener.addMouseOut()}>
                {JSON.stringify(listener, null, 2)}
            </pre>
            <button onClick={reset}>Reset</button>
            <button onClick={timer}>Timer</button>
        </div>

    );
})

export default Listener;