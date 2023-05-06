import React, { useState } from 'react';
import '../';

function TempratureHandler() {
  const [temperature, setTemperature] = useState(20);

  const handleIncrement = () => {
    setTemperature(temperature + 1);
  };

  const handleDecrement = () => {
    setTemperature(temperature - 1);
  };

  const getBackgroundColor = () => {
    if (temperature < 10) {
      return 'blue';
    } else if (temperature > 30) {
      return 'red';
    } else {
      return 'white';
    }
  };

  return (
    <div className="TempratureHandler" style={{ backgroundColor: getBackgroundColor() }}>
      <h1>Temperature Control</h1>
      <p>Current Temperature: {temperature}°C</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default TempratureHandler;