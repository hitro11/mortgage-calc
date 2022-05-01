import './TotalPayment.css';

const TotalPayment = () => {
  return (
    <div className='container total-payment'>
        <div className='col'>
            <label className="label">Total Mortgage Payment</label>
            <label className="sublabel">Monthly</label>
        </div>
        <input type="text"  className="blank no-border no-outline" />
    </div>
  )
}

export default TotalPayment