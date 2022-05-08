import './Amortization.css';
import { useState } from 'react';

const amortPeriods = [
    {label: '5 years', value: 5},
    {label: '10 years', value: 10},
    {label: '15 years', value: 15},
    {label: '20 years', value: 20},
    {label: '25 years', value: 25, selected: true},
    {label: '30 years', value: 30}
];

interface Props {
    amort: string,
    setAmort: Function,
    disabled: boolean
}


const Amortization: React.FC<Props> = (props) => {
    
    const selectHandler = (event) => {
        console.log(event.target.value);
        props.setAmort(event.target.value);
    }

    return (
        <div className='container'>
            <label htmlFor="" className="item1">Amortization Period</label>
            <div className="input-container">
                <select className="no-border no-outline" defaultValue={props.amort} onChange={selectHandler} disabled={props.disabled} >
                    {
                        amortPeriods.map(p => 
                            <option key={p.value} value={p.value} defaultChecked={p.selected} >{p.label}</option>
                        )
                    }
                </select> 
            </div>      
        </div>
    )
}

export default Amortization