import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function UseEffectExam01(props) {

    const [count, setCount] = useState(0);
    const [money, setMoney] = useState(0);
    const [result, setResult] = useState(0);

    // useEffect 함수가 발생되면 렌더링될 때마다 콜백이 호출됨

    useEffect(() => {
        console.log('렌더링1');
    });

    // 처음 렌더링 될 때만 호출
    useEffect(() => {
        console.log('렌더링2');
    }, []); // 의존성을 빈 값으로 됨

    // 특정 값이 갱신될 때 실행
    useEffect(() => {
        console.log('렌더링3');
    }, [result]); // 부여된 의존성 값이 갱신될 때 실행됨

    // count 증가
    const updateCount = (e) => {
        setCount(count + 1);
        console.log('count : ' + (count + 1));
    }

    // money 증가
    const updateMoney = (e) => {
        setResult(money);
        console.log('money : ' + money);
    }

    const inputMoney = (e) => {
        setMoney(e.target.value);
    }


    return (
        <div>
            <button type='button' onClick={updateCount}>카운트 증가</button>
            <div>
                <input type='text' name='money' onChange={inputMoney} value={money}></input>
                <button type='button' onClick={updateMoney}>계산</button>
            </div>
        </div>
    );
}

export default UseEffectExam01;