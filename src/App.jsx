import { useState } from 'react';
import Game from './components/Game';
import Result from './components/Result';
import './index.scss';



const questions = [
  {
    title: 'What is React ?',
    variants: ['library', 'framework', 'application'],
    correct: 0,
  },

  {
    title: 'React Component is ...  ',
    variants: ['an app ', 'a part of an app', 'none of the variants above'],
    correct: 1,
  },
  
  {
    title: 'What is JSX?',
    variants: [
      'Just a simple HTML',
      'It is a function',
      'The same HTML, but which allows to write JS code',
    ],
    correct: 2,
  },
  {
    title: 'Which is not a programming lang.?',
    variants: [
      'Java Script',
      'HTML',
      'Java',
    ],
    correct: 1,
  },
];

function App() {

  const [step, setStep] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const question = questions[step];


  function onVariantClick(index) {
   questions[step].correct === index ? setCorrectAnswers(correctAnswers+1) : setCorrectAnswers(correctAnswers+0);
   setStep(step + 1);
  }

  if(questions){

    return (
      <div className="App">
      {
        step !== questions.length 
        ? <Game step={step} question={question} onVariantClick={onVariantClick} questionsCount = {questions.length}/>
        : <Result correctAnswers={correctAnswers} questionsCount = {questions.length}/>
      }
    </div>
  );
}
}

export default App;