<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<style>
    #drop-zone {
        width: 300px;
        height: 200px;
        border: 2px dashed #ccc;
        text-align: center;
        line-height: 200px;
        color: #ccc;
        margin: 20px;
    }
</style>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div id="drop-zone">여기에 폴더를 드래그하세요.</div>
    <div id="image-container"></div>
</body>
<script>
    const dropZone = document.getElementById('drop-zone');
    const imageContainer = document.getElementById('image-container');

    // 드래그 오버 이벤트를 방지하고 기본 동작을 취소합니다.
    dropZone.addEventListener('dragover', function(event) {
        event.preventDefault();
        dropZone.style.color = 'black';
        dropZone.style.borderColor = 'black';
    });

    // 드래그 리브 이벤트: 요소 밖으로 드래그할 때 원래 스타일로 복원합니다.
    dropZone.addEventListener('dragleave', function(event) {
        dropZone.style.color = '#ccc';
        dropZone.style.borderColor = '#ccc';
    });

    // 드롭 이벤트: 파일을 드롭 영역에 떨어뜨렸을 때 실행됩니다.
    dropZone.addEventListener('drop', function(event) {
        event.preventDefault(); // 기본 이벤트를 막습니다.
        dropZone.style.color = '#ccc';
        dropZone.style.borderColor = '#ccc';

        const files = event.dataTransfer.files; // 드롭된 파일들을 가져옵니다.

        // 이미지 컨테이너 초기화
        imageContainer.innerHTML = '';

        for (let i = 0; i < files.length; i++) {
            if (files[i].type.startsWith('image/')) { // 이미지 파일인지 확인
                const img = document.createElement('img');
                img.src = URL.createObjectURL(files[i]);
                img.style.width = '100px';
                img.style.height = '100px';
                img.style.margin = '5px';
                img.onload = function() {
                    URL.revokeObjectURL(img.src); // 메모리 해제
                };
                imageContainer.appendChild(img);
            }
        }
    });
</script>
</html>