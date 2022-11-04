import React from 'react';
import '../index.scss';

function Result({correctAnswers, questionsCount}) {
    const applause = "https://img.icons8.com/emoji/512/partying-face.png";
    const dissapointed = "https://img.icons8.com/officel/512/nerd.png";

    var imgSrc = "";
    correctAnswers >= Math.round(questionsCount/2) ? imgSrc=applause : imgSrc = dissapointed
    return (
      <div className="result">
        <img src={imgSrc} alt="Not found" />
        <h2>You've guessed {correctAnswers} out of {questionsCount} answers</h2>
        <a href="/">
          <button>Try again</button>
        </a>
      </div>
    );
  }
  

export default Result;