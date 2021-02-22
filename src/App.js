import './App.css';
import QuestionFeed from './QuetionFeed/QuestionFeed';
import { QuestionContext } from './question-context';
import { useEffect, useState } from 'react';



function App() {

  const [question, setQuestion] = useState('');

  useEffect(() => {
    async function getAllQuestions() {
      try {
        const res = await fetch('http://localhost:4000/question',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify()
          })
          setQuestion(res.content);
          console.log(res)
      }
      catch(err) {
        console.log(err)
      }
}
getAllQuestions()
  }, []);




  return (
    <div className="App">
      <QuestionFeed />
    </div>
  );
}

export default App;
