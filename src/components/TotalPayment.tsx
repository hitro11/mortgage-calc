import './TotalPayment.css';

interface Props {
  totalPay: string
}

const TotalPayment: React.FC<Props> = (props) => {
  return (
    <div className='container'>
        <div className='item-1'>
            <label className="label item1">Total Mortgage Payment</label> <br/>
            <label style={{textAlign: 'center'}}>(Monthly)</label>
        </div>
        <div className="input-container read-only">
          <label className="prefix">$</label>
          <input readOnly data-testid='total-payment' type="text" className="blank label " value={props.totalPay} />
        </div>
    </div>
  )
}

export default TotalPayment