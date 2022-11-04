import { useState } from 'react';
import Game from './components/Game';
import Result from './components/Result';
import './index.scss';



const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },

  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
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