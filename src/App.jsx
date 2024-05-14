import React from 'react';
import './App.css';
import { useState } from 'react';
import { useMemo } from 'react';
const App = () => {
  const [height, setHeight] = useState(70);
  const [weight, setWeight] = useState(180);

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };
  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const output = useMemo(() => {
    const calculateHeight = height / 100;
    return Math.floor(weight / (calculateHeight * calculateHeight));
  }, [height, weight]);
  return (
    <section>
      <div className="main">
        <h1>BMI Calculator</h1>
        <div className="input-section">
          <p className="slider-output"> Weight:{weight} kg</p>
          <input
            type="range"
            className="input-slider"
            step="1"
            min="40"
            max="200"
            onChange={handleWeightChange}
          />
          <p className="slider-output"> Height:{height} cm</p>
          <input
            type="range"
            className="input-slider"
            onChange={handleHeightChange}
            step="1"
            min="150"
            max="200"
          />
        </div>
        <h2 className="bmi-heading">Your BMI is : {output}</h2>

        <div className="categories">
          <h2>BMI Categories:</h2>
          <h3>Underweight = Less than 18.5</h3>
          <h3>Normal weight = 18.5–24.9</h3>
          <h3>Overweight = 25–29.9</h3>
          <h3>Obesity = BMI of 30 or greater</h3>
        </div>
      </div>
    </section>
  );
};

export default App;
