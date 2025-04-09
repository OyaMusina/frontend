import logo from './logo.svg';
import './index.css';
import React from 'react';

const questions = [
  {
    title: 'Какой из следующих типов интерфейса не относится к Collection?',
    variants: ['Map', 'Set', 'List', 'Queue'],
    correct: 0,
  },
  {
    title: 'Дан массив: int[] arr. Выберите родительский класс данного массива',
    variants: ['Integer[]', 'Number[]', 'Object', 'Object[]'],
    correct: 2,
  },
  {
    title: 'Какая кодировка используется поумолчанию для символов в String (Java SE > 9)',
    variants: ['ASCII', 'LATIN-I', 'UTF-16', 'Зависит от значения литерала строки'],
    correct: 3,
  },
  {
    title: 'Какая stream-операция не отслеживает состояние потока?',
    variants: ['Sorted', 'Distinct', 'Unordered', 'Skip'],
    correct: 2,
  },
  
];

function Result({correct}) {
  return (
    <div className='result'>
      <img src="https://avatanplus.com/files/resources/original/577e751b50334155c5f972c1.png"/>
      <h2>Вы отгадали {correct} из {questions.length}</h2>
      <a href='/'>
      <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game( {step, question, onClickVariant}) {
  const percent = Math.round((step / questions.length) * 100);

  console.log(percent);
  return(
    <div className='progress'>
     <div style={{ width: `${percent}%` }} className="progress__inner"></div>

      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
        <li onClick={() => onClickVariant(index)} key={text}>{text}</li>

       )) }
      </ul>
    </div>
  )
  
};

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
    {
      step !== questions.length ? (
      <Game step={step} question={question} onClickVariant={onClickVariant}/> ) : (
        <Result correct = {correct} />
      )
    }
      {/*<Result />*/}
    </div>
  );
}

export default App;
