export function add(a, b) {
    return a + b;
}

export function substract(a, b) {
    return a - b;
}

// 객체 변수 자체는 변경 불가
const calculateOperator = {
    // 함수에 할당되는 값은 변경 가능
    multiple(a, b) {
        return a*b;
    },
    divide(a, b) {
        return a / b;
    }
}

// 기본적으로 내보낼 값을 default로 설정했기에 import 편리
// Java와 달리 접근제한자 개념과 상이
// 즉, export default 자체는 하나의 키워드 역할
export default calculateOperator;