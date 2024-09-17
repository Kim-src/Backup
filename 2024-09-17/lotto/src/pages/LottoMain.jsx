import React, { useState } from 'react';
import ManualNumber from './ManualNumber';

function LottoMain(props) {

    /* 로또 번호 수동 선택 */
    // 로또 번호 표시 상태
    const [showManualNumber, setShowManualNumber] = useState(false);

    /* 로또 번호 자동 선택 */
    const [numbers, setNumbers] = useState([]);

    function makeAutoNumber() {
        const numbers = [];
        while(numbers.length < 6) {
            let number = Math.floor((Math.random() * 45) + 1);
            if(!numbers.includes(number)) {
                numbers.push(number);
            }
        }

        setNumbers(numbers);
    }

    return (
        <div className='lottoMain' style={{margin:'5%'}}>
            <div>
                <button
                    type="button"
                    onClick={() => setShowManualNumber(!showManualNumber)}>
                    수동 선택
                </button>
                <span> </span>
                <button
                    type="button"
                    onClick={makeAutoNumber}>
                    자동 선택
                </button>
                {/* join 메서드로 인해 구분자가 자동으로 생략됨 */}
                <div>로또 번호: {numbers.join(', ')}</div>
            </div>
            <br/>
            <div>
                {showManualNumber && <ManualNumber/>}
                <br/>
            </div>
        </div>
    );
}

export default LottoMain;