/* eslint-disable react/prop-types */
const FinalAmt = ({ billAmt, setBillAmt }) => {
  let tip;

  if (billAmt.bill !== 0) {
    tip = Math.ceil(
      ((billAmt.bill * billAmt.tip) / 100 +
        (billAmt.bill * billAmt.frndTip) / 100) /
        2
    );
  }

  return (
    <div>
      {billAmt.bill > 0 && (
        <>
          <h2>
            Payable amount ₹{billAmt.bill + tip} ( ₹{billAmt.bill} + ₹{tip} tip
            )
          </h2>
          <button
            onClick={() =>
              setBillAmt({
                bill: 0,
                tip: 0,
                frndTip: 0,
              })
            }
          >
            Reset
          </button>
        </>
      )}
    </div>
  );
};

export default FinalAmt;
