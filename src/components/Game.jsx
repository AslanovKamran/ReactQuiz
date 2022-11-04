import React from 'react';
import '../index.scss';

function Game({ step, question, onVariantClick, questionsCount }) {
    let widthPercent = Math.round((step / questionsCount) * 100);
    return (
      <>
        <div className="progress">
          <div style={{ width: `${widthPercent}%` }} className="progress__inner"></div>
        </div>
        <h1>{question.title}</h1>
        <ul>
          {
            question.variants.map((q, index) => (<li onClick={() => { onVariantClick(index) }} key={index}>{q}</li>))
          }
        </ul>
      </>
    );
  }

export default Game