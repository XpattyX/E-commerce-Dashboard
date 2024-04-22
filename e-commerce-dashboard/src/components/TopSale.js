import * as React from 'react';
import './style.css'

export default function Topsale(){
    return (
    <>
        <h3>Top Sales</h3>
        <div className='Top5-grid'>
            <div className='Top5-item'>
                <h4>1.Tomato</h4>
                <h5>Total 570 THB</h5>
            </div>
            <div className='Top5-item'>
                <h4>2.Peach</h4>
                <h5>Total 440 THB</h5>
            </div>
            <div className='Top5-item'>
                <h4>3.Lettuce</h4>
                <h5>Total 407 THB</h5>
            </div>
            <div className='Top5-item'>
                <h4>4.Cabbage</h4>
                <h5>Total 370 THB</h5>
            </div>
            <div className='Top5-item'>
                <h4>5.Coconut</h4>
                <h5>Total 290 THB</h5>
            </div>

        </div>
        
    </>)
}