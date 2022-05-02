import './Amortization.css';

const amortPeriods = [
    {label: '5 years', value: 5},
    {label: '10 years', value: 10},
    {label: '15 years', value: 15},
    {label: '20 years', value: 20},
    {label: '25 years', value: 25, selected: true},
    {label: '30 years', value: 30}
];

const Amortization: React.FC = () => {
  return (
    <div className='container'>
        <label htmlFor="" className="label">Amortization Period</label>
        <select className="no-border no-outline">
            {
                amortPeriods.map(p => 
                    <option key={p.value} value={p.value} selected={p.selected} >{p.label}</option>
                )
            }
        </select> 

        
    </div>
  )
}

export default Amortization