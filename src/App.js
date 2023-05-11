import './App.css';
import React from 'react';
import { AppTitle } from './components/AppTitle';
import { WeightForm } from './components/WeightForm';
import { WeightOutput } from './components/WeightOutput';


export const App = () => {
  return (
    <article className='container'>
      <div className="app">
      <AppTitle />
      <WeightForm />
      </div>

    </article>
  );
}
