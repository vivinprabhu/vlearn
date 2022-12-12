import React from 'react';
import './fourbutton.css';

import eee from './eee.png'

function Four()
{
    return(

        <div>

            <div className='header'></div>

            <div class="App1">
                <div class="card"><img src={eee} alt="eee"/>
                    <div class="info">
                        <div>
                            <input class='btn' type='submit' value='Subject Notes'></input>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    );
}
export default Four;