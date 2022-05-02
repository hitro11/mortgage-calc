import './DownPayment.css';

interface Props {
  downPay: string,
  downPayP: string,
  setDownPay,
  setDownPayP,
  disabled: boolean
}

const DownPayment: React.FC<Props> = (props) => {

  const downPayPChange = (e) => {
    props.setDownPayP(e.target.value);
  }

  const downPayChange = (e) => {
    props.setDownPay(e.target.value);
  }

  return (
    <div className="down-payment">
        <div className="dp">
            <label className='' >Down Payment</label>
        </div>
        <div className='minus'>-</div>
        <div className="dp-inputs">
            <input className='dp-percent outline-bot' type="text" disabled={props.disabled} value={props.downPayP} onChange={downPayPChange} />
            <input className='dp-dollar outline-bot' type="text" disabled={props.disabled} value={props.downPay} onChange={downPayChange}  />
        </div>

    </div>
  )
}

export default DownPayment