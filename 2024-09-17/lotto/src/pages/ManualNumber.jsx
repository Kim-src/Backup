import React from 'react';
import { useState } from 'react';

/* 로또 번호 수동 선택 기능 */
function ManualNumber(props) {

    const [inputs, setInputs] = useState({
        first : '',
        second : '',
        third : '',
        fourth : '',
        fifth : '',
        sixth : ''
    });


    /* 로또 번호 할당 기능 */
    // onChange를 통해 할당된 key, value값을 inputs 객체에 할당
    const {first, second, third, fourth, fifth, sixth} = inputs;
    // 중복 검사를 위한 value에 대한 배열 변환
    const values = [first, second, third, fourth, fifth, sixth];

    const onChange = (e) => {
        const {name, value} = e.target;

        if(parseInt(value) >= 1 && parseInt(value) <= 45) {
            if(!values.includes(value)) {
                setInputs({
                    ...inputs,
                    [name] : value
                });
            } else {
                setInputs({
                    ...inputs,
                    [name] : ''
                });
            }
        } else {
            alert("1 ~ 45의 숫자를 입력해주세요.");
            setInputs({
                [name] : ''
            });
        }
    }


    /* 로또 번호 중복 검사 기능 */
    // 커서 이동 시 발생되는 이벤트
    const onBlur = (e) => {
        const {name, value} = e.target;
        // 값이 입력되지 않은 상태에서는 중복 검사 미실시
        if(!value) {
            return;
        }

        // 중복 상태 검사용 플래그 설정
        let duplication = Object.keys(inputs).some(key =>
        key !== name && inputs[key] === value);

        // 중복 검사 플래그의 상태가 true일 경우 실행
        if(duplication) {
            // 중복값 알림창 표시
            alert("중복된 값은 입력할 수 없습니다.");
        }
    }


    /* 로또 번호 확정 기능 */
    const [showManualNumber, setShowManualNumber] = useState(false);
    // 배열로 변환된 값에 라벨 할당
    const labels = ["첫 번째", "두 번째", "세 번째", "네 번째", "다섯 번째", "여섯 번째"];

    function goNumber() {
        const faultyIndex = [];

        values.forEach((value, index) => {
            if(!value) {
                faultyIndex.push(index);
            }
        });

        if(faultyIndex.length === 0) {
            if (window.confirm("번호 입력을 완료하셨습니까?")) {
                setShowManualNumber(true);
            } else {
                setShowManualNumber(false);
                alert("번호 입력이 취소되었습니다.");
            }
        } else {
            // JSTL을 이용한 문제의 값에 대한 메시지 생성
            const faultyMessage = faultyIndex.map(index => `${labels[index]}`);
            // 오류값 위치 알림 표시
            alert(`${faultyMessage.join(', ')} 번호를 다시 입력해주세요.`);
        }
    }


    /* 뷰포트 */
    return (
        <div>
            <div>
                <input
                    type="number"
                    name="first"
                    onChange={(e) => onChange(e)}
                    onBlur={(e) => onBlur(e)}
                    placeholder="번호를 입력하세요.">
                </input>
                <br/>
                
                <input
                    type="number"
                    name="second"
                    onChange={(e) => onChange(e)}
                    onBlur={(e) => onBlur(e)}
                    placeholder="번호를 입력하세요.">
                </input>            
                <br/>

                <input
                    type="number"
                    name="third"
                    onChange={(e) => onChange(e)}
                    onBlur={(e) => onBlur(e)}
                    placeholder="번호를 입력하세요.">
                </input>            
                <br/>

                <input
                    type="number"
                    name="fourth"
                    onChange={(e) => onChange(e)}
                    onBlur={(e) => onBlur(e)}
                    placeholder="번호를 입력하세요.">
                </input>            
                <br/>

                <input
                    type="number"
                    name="fifth"
                    onChange={(e) => onChange(e)}
                    onBlur={(e) => onBlur(e)}
                    placeholder="번호를 입력하세요.">
                </input>            
                <br/>

                <input
                    type="number"
                    name="sixth"
                    onChange={(e) => onChange(e)}
                    onBlur={(e) => onBlur(e)}
                    placeholder="번호를 입력하세요.">
                </input>

                <span> </span>
                <button type="button" onClick={goNumber}>입력 완료</button>
            </div>
            {/* showManualNumber 함수가 참일 경우 수동 번호 표시 */}
            {showManualNumber && (
                <div>
                로또 번호: {first}, {second}, {third}, {fourth}, {fifth}, {sixth}
                </div>
            )}
        </div>
    );
}

export default ManualNumber;