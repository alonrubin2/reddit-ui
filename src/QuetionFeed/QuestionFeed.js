import React from 'react';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import { questionScheme } from './Question.scheme';
import FeedBox from './FeedBox/FeedBox';
import './QuestionFeed.scss';

function QuestionFeed() {

    function submit(values) {
        fetch('http://localhost:4000/question',
            {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });
            
    }


    return (
        <div className="QuestionFeed">
            <Formik initialValues={{ title: '', content: '' }}
                validationSchema={questionScheme}
                onSubmit={submit}>
                <Form className="question-form">
                    <div className="form-group">
                        <h2>Title</h2>
                        <label htmlFor="title" >Title</label>
                        <Field className="form-control" id="title" name="title" />
                        <ErrorMessage className="errMsg" name="title" component="div" />
                    </div>
                    <div className="form-group">
                        <h2>Question</h2>
                        <label htmlFor="content" >Question</label>
                        <Field className="form-control" id="content" name="content" />
                        <ErrorMessage className="errMsg" name="content" component="div" />
                    </div>
                    <div className="form-group">
                        <button className="btn" type="submit">Submit</button>
                    </div>
                </Form>
            </Formik>
            <FeedBox />
        </div>
    );
}

export default QuestionFeed;
