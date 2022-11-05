import axios from 'axios';
import { useEffect, useState } from 'react';
import Game from './components/Game';
import Result from './components/Result';
import './index.scss';
import Loader from './modules/Loader';

const mockapiUrl = "https://63655ce1f711cb49d1fc5811.mockapi.io/questions";

function App() {

  async function LoadQuestionsAsyc() {
    await axios.get(mockapiUrl)
      .then((result) => { setQuestions(result.data); })
      .catch((error) => { console.log(error) });
  }

  useEffect(() => {
    LoadQuestionsAsyc();
  }, [])

  const [questions, setQuestions] = useState([]);
  const [step, setStep] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const question = questions[step];

  function onVariantClick(index) {
    console.log("I clicked on " + index);
    console.log("Coorect answer is " + questions[step].correct);
    questions[step].correct === index.toString() ? setCorrectAnswers(correctAnswers + 1) : setCorrectAnswers(correctAnswers + 0);
    console.log(correctAnswers);
    setStep(step + 1);
  }



  if (questions.length === 0) return (<Loader />)

  return (
    <div className="App">
      {
        step !== questions.length
          ? <Game step={step} question={question} onVariantClick={onVariantClick} questionsCount={questions.length} />
          : <Result correctAnswers={correctAnswers} questionsCount={questions.length} />
      }
    </div>
  );
}


export default App;