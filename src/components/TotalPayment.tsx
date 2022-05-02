import './TotalPayment.css';

interface Props {
  totalPay: string
}

const TotalPayment: React.FC<Props> = (props) => {
  return (
    <div className='container total-payment'>
        <div className='col'>
            <label className="label">Total Mortgage Payment</label>
            <label className="sublabel">Monthly</label>
        </div>
        <input type="text"  className="blank no-border no-outline" value={props.totalPay} />
    </div>
  )
}

export default TotalPayment