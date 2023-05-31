import React from 'react';
import learn from "../store/learn";
import {observer} from "mobx-react-lite";

const Learn = observer(()=>{

    return (
        <div>
            <div className="container">
                <h3>Learn:</h3>
                <ul>
                    {learn.skills.map((skill) => (
                        <li key={skill.id} className={skill.status ? "done" : ""}
                            onClick={() => learn.change(skill.id)}>{skill.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
})

export default Learn;