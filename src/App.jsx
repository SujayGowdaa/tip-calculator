import BillInput from './components/BillInput';
import FinalAmt from './components/FinalAmt';
import SelectPercentage from './components/SelectPercentage';
import SelectPercentageFrnd from './components/SelectPercentageFrnd';
import { useState } from 'react';

function App() {
  const [billAmt, setBillAmt] = useState({
    bill: 0,
    tip: 0,
    frndTip: 0,
  });
  console.log(billAmt);
  function handleGetBill(bill) {
    setBillAmt((prevState) => ({
      ...prevState,
      bill: Number(bill),
    }));
  }

  function handleAddTip(tip) {
    setBillAmt((prevState) => ({
      ...prevState,
      tip: Number(tip),
    }));
  }
  function handleAddFrndTip(tip) {
    setBillAmt((prevState) => ({
      ...prevState,
      frndTip: Number(tip),
    }));
  }

  return (
    <div>
      <h1>Tip Calculator</h1>
      <BillInput onGetBill={handleGetBill} billAmt={billAmt} />
      <SelectPercentage onAddTip={handleAddTip} billAmt={billAmt} />
      <SelectPercentageFrnd onAddFrndTip={handleAddFrndTip} billAmt={billAmt} />
      <FinalAmt billAmt={billAmt} setBillAmt={setBillAmt} />
    </div>
  );
}

export default App;
