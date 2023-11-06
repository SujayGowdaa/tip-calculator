/* eslint-disable react/prop-types */
const BillInput = ({ onGetBill, billAmt }) => {
  return (
    <div className='input'>
      <p>How much was the bill?</p>
      <input
        type='number'
        onChange={(e) => onGetBill(e.target.value)}
        value={billAmt.bill}
      />
    </div>
  );
};

export default BillInput;
