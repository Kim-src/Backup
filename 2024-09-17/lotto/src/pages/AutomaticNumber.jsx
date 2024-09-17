import React, { useState } from 'react';

function AutomaticNumber(props) {

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
        <div>
            <button onClick={makeAutoNumber}>자동 번호 생성</button>
            {/* join 메서드로 인해 구분자가 자동으로 생략됨 */}
            <div>로또 번호: {numbers.join(', ')}</div>
        </div>
    );
}

export default AutomaticNumber;