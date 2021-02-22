import React from 'react';
import './Question.scss';
import { QuestionContext } from '../../../question-context';



function Question(props){


    return (
        <div className="Question">
            <h3 className="q-title">{props.title}</h3>
            <p className="q-body">{props.content}</p>
            <span className="q-date"><strong>Posted at - </strong>{props.createdAt}</span>
            <hr/>
        </div>
    );
}

export default Question;
