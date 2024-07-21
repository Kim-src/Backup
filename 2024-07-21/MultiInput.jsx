import React from 'react';
import { useState } from 'react';

function MultiInput(props) {

    // set을 통해서 state값이 변경되면 화면이 다시 로딩됨
    // inputs Object를 이용하여 key, value
    // 나중에 inputs 객체를 전송하면 됨
    // 유효값 처리도 쉬움
    const [inputs, setInputs] = useState( {myName : '', myAge : ''} )
    console.log('로딩');

    // 구조 분해 할당
    // onChange를 통한 key, value값 할당된 것이 inputs 객체로 할당
    const {myName, myAge} = inputs;

    const onChange = (e) => {

        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name] : value // 기존 inputs 복사 후 key에 해당되는 value 업데이트
        })
    }

    return (
        <div>
            <div>
                <input type="text" name="myName" onChange={(e) => onChange(e)} placeholder="이름을 입력하세요."></input>            
                <input type="text" name="myAge" onChange={(e) => onChange(e)} placeholder="나이를 입력하세요."></input>            
            </div>
            <div>
                이름 : {myName}, 나이 : {myAge}
            </div>
        </div>
    );
}

export default MultiInput;