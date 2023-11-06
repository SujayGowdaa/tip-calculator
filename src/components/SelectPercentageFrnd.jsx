/* eslint-disable react/prop-types */
const SelectPercentageFrnd = ({ onAddFrndTip, billAmt }) => {
  return (
    <div className='input'>
      <p>How did your friend like the service?</p>
      <select
        onChange={(e) => onAddFrndTip(e.target.value)}
        value={billAmt.frndTip}
      >
        <option value='0'>Dissatisfied (0%)</option>
        <option value='5'>It was okay (5%)</option>
        <option value='10'>It was good (10%)</option>
        <option value='20'>Absolutely amazing (20%)</option>
      </select>
    </div>
  );
};

export default SelectPercentageFrnd;
