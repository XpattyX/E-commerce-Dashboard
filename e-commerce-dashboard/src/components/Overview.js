import * as React from 'react';
import './style.css'

export default function Overview(){
    return (
    <div>
    <div className='overview'>
        <div className='overview-item'>
            <h3>Total Sale (THB)</h3>
            <h4>48,000</h4>
        </div>
        <div className='overview-item'>
            <h3>Sale Amount (Unit)</h3>
            <h4>247</h4>
        </div>
        <div className='overview-item'>
            <h3>New Customer</h3>
            <h4>+24</h4>

        </div>
        <div className='overview-item'>
            <h3>Growth Rate</h3>
            <h4>+18.05%</h4>
        </div>

    </div>
    </div>)
}
