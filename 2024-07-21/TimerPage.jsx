import React from 'react';
import { useEffect } from 'react';

function TimerPage(props) {

    useEffect(() => {
        const timer = setInterval(() => {
            console.log('타이머 실행중');
        }, 1000);

        // unmount 시 실행
        return () => {
            clearInterval(timer);
            console.log('타이머 종료');
        }
    // []를 이용하여 1회만 실행되도록 설정
    }, []);

    return (
        <div>
            <span>타이머가 실행됩니당</span>
        </div>
    );
}

export default TimerPage;