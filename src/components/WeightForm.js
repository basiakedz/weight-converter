import React, { useState } from 'react';
import { WeightOutput } from './WeightOutput';


export const WeightForm = () => {
  const [lbs, setLbs] = useState(0);
  const [g, setG] = useState(0);
  const [kg, setKg] = useState(0);
  const [oz, setOz] = useState(0);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setLbs(value);
    setG(value * 453.59237);
    setKg(value * 0.45359237);
    setOz(value * 16);
  };

  return (
    <article>
      <input className='main-weights'
        type="text"
        placeholder='Enter pounds'
        value={lbs}
        onChange={handleInputChange}
      />
      
      <WeightOutput label="Grams" value={g} backgroundColor="#4C49D4"/>
      <WeightOutput label="Kilograms" value={kg} backgroundColor="#11B003"/>
      <WeightOutput label="Ounces" value={oz} backgroundColor="#F94444"/>
    </article>
  );
};

