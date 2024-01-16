import React from "react";
import useCurrencyInfo from "./hooks/useCurrency";
  // assuming your hook file is in the same directory

function CurrencyInfoComponent({ currencyCode }) {
  const currencyInfo = useCurrencyInfo(currencyCode);

  // Render your component using the fetched data
  return (
    <div>
      <h1>{currencyCode} Information</h1>
      <p>Name: {currencyInfo.name}</p>
      <p>Symbol: {currencyInfo.symbol}</p>
      {/* Add more properties as needed */}
    </div>
  );
}

export default CurrencyInfoComponent;
