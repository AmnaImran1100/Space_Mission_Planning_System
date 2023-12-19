import React, { createContext, useContext, useState } from 'react';

const CalculationContext = createContext();

export const CalculationProvider = ({ children }) => {
  const [calculatedData, setCalculatedData] = useState({
    orbitalVelocity: null,
    changeInVelocity: null,
    payloadWeight: null,
  });

  const updateCalculatedData = (newData) => {
    setCalculatedData(newData);
  };

  return (
    <CalculationContext.Provider value={{ calculatedData, updateCalculatedData }}>
      {children}
    </CalculationContext.Provider>
  );
};

export const useCalculation = () => {
  return useContext(CalculationContext);
};
