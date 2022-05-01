import './Amortization.css';

const amortPeriods = [
    {label: '5 years', value: 5},
    {label: '10 years', value: 10},
    {label: '15 years', value: 15},
    {label: '20 years', value: 20},
    {label: '15 years', value: 25},
    {label: '30 years', value: 30}
];

const Amortization = () => {
  return (
    <div className='container'>
        <label htmlFor="" className="label">Amortization Period</label>
        <select className="no-border">
            {
                amortPeriods.map(p => 
                    <option key={p.value} value={p.value}>{p.label}</option>
                )
            }
        </select> 

        
    </div>
  )
}

export default Amortization