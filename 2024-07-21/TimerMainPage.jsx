import React, { useState } from 'react';
import TimerPage from './TimerPage';

function TimerMainPage(props) {

    const [showTimer, setShowTimer] = useState(false);


    return (
        <div>
            {showTimer && <TimerPage/>}
            <button type='button' onClick={() => setShowTimer(!showTimer)}>ToggleTimer</button>
        </div>
    );
}

export default TimerMainPage;