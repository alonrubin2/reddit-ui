import React from 'react';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import { questionScheme } from './Question.scheme';
import FeedBox from './FeedBox/FeedBox';
import './QuestionFeed.scss';

function QuestionFeed() {

    function submit(values) {
        console.log(values);
        return values = '';
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
                        <label htmlFor="question" >Question</label>
                        <Field className="form-control" id="question" name="question" />
                        <ErrorMessage className="errMsg" name="question" component="div" />
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
