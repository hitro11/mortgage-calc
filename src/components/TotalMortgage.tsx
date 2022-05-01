import './TotalMortgage.css'

const TotalMortgage = () => {
  return (
    <div className='total-mortgage'>
      <label htmlFor="" className="label">Total Mortgage Required</label>
      <div className="eq">=</div>
      <input type="text" disabled className="blank no-border no-outline" />
    </div>
  )
}

export default TotalMortgage