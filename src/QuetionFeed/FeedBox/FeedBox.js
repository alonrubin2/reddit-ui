import React, { useEffect, useState } from 'react';
import Question from './Question/Question.js';
import './FeedBox.scss';

function FeedBox() {

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/question')
            .then(res => res.json())
            .then(res => setQuestions([...res]))
    }, [])

    return (
        <div className="FeedBox">
            {questions.map((question, index) => {
                return <Question key={index}
                    title={question.title}
                    content={question.content}
                    createdAt={question.createdAt} />

            })}
        </div>
    );
}

export default FeedBox;
