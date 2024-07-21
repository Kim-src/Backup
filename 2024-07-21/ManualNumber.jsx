import React from 'react';
import { useState } from 'react';

function ManualNumber(props) {

    const [inputs, setInputs] = useState({
        first : '',
        second : '',
        third : '',
        fourth : '',
        fifth : '',
        sixth : ''
    });

    // onChange를 통해 할당된 key, value값을 inputs 객체에 할당
    const {first, second, third, fourth, fifth, sixth} = inputs;

    const onChange = (e) => {
        const {name, value} = e.target;
        if(parseInt(value) > 0 && parseInt(value) < 53) {
            setInputs({
                ...inputs,
                [name] : value
            })
        } else {
            alert("1 ~ 52 사이의 숫자를 입력해주세요.");
        }
    }

    const [showManualNumber, setShowManualNumber] = useState(false);

    function goNumber() {
        if(first && second && third && fourth && fifth && sixth) {
            if(window.confirm("입력한 번호로 구매하시겠습니까?")) {
                setShowManualNumber(true);
            } else {
                setShowManualNumber(false);
                alert("로또 구매가 취소되었습니다.")
            }
        } else {
            alert("6개 번호를 모두 입력해주세요.");
        }
    }

    return (
        <div>
            <div>
                <input type="number" name="first" onChange={(e) => onChange(e)} placeholder="번호를 입력하세요."></input>
                <br/>
                <input type="number" name="second" onChange={(e) => onChange(e)} placeholder="번호를 입력하세요."></input>            
                <br/>
                <input type="number" name="third" onChange={(e) => onChange(e)} placeholder="번호를 입력하세요."></input>            
                <br/>
                <input type="number" name="fourth" onChange={(e) => onChange(e)} placeholder="번호를 입력하세요."></input>            
                <br/>
                <input type="number" name="fifth" onChange={(e) => onChange(e)} placeholder="번호를 입력하세요."></input>            
                <br/>
                <input type="number" name="sixth" onChange={(e) => onChange(e)} placeholder="번호를 입력하세요."></input>
                <span> </span>
                <button type="button" onClick={goNumber}>번호 구매</button>
            </div>
            {/* showManualNumber 함수가 참일 경우 수동 번호 표시 */}
            {showManualNumber && (
                <div className="manualNumber">
                구매내역 확인: {first}, {second}, {third}, {fourth}, {fifth}, {sixth}
                </div>
            )}
        </div>
    );
}

export default ManualNumber;