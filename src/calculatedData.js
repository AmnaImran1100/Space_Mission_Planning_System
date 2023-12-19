import React from 'react';
import ReactDOM from 'react-dom';
import CalculationModule from './components/CalculationModule';
import { CalculationProvider } from './CalculationContext'; // Import the context provider

ReactDOM.render(
  <CalculationProvider>
    <CalculationModule />
    {/* Other components */}
  </CalculationProvider>,
  document.getElementById('root')
);
