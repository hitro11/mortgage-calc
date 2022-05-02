import './DownPayment.css';

const DownPayment: React.FC = (props) => {

  return (
    <div className="down-payment">
        <div className="dp">
            <label className='' >Down Payment</label>
        </div>
        <div className='minus'>-</div>
        <div className="dp-inputs">
            <input className='dp-percent outline-bot' type="text" disabled={props.isDisabled} defaultValue={props.downPayP} />
            <input className='dp-dollar outline-bot' type="text" disabled={props.isDisabled} defaultValue={props.downPay}  />
        </div>

    </div>
  )
}

export default DownPayment