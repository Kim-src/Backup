// 버튼이 클릭되면 실행될 콜백 함수 정의
// 버튼이 클릭되면 콘솔창에 Welcome! 출력
document.querySelector('.button').addEventListener('click', function() {
    console.log('Welcome!');
});

// 1초가 지나면 실행될 콜백 함수 정의
// 1초가 지나면 콘솔창에 Welcome! 출력
setTimeout(function() {
    console.log('Welcome!');
}, 1000);